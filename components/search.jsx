var React = require('react');
var FilterBar = require('./filter-bar');
var TopBar = require('./topbar');
var Banner = require('./banner');
var GoogleMap = require('./google-map');
var ResultsGrid = require('./results-grid');
var NoResults = require('./noresults');
var Router = require('react-router').Router;
var RouterContext = require('react-router').RouterContext;

const leftStyle = {
  width: '75%',
  display: 'inline-block'
};
const rightStyle = {
  width: '25%',
  display: 'inline-block'
};
var currentSelectedFilters = {
  insurance: null,
  gender: null,
  rating: null
};

var insurances = [];

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    var query = this.props.location.query;

    var searchText = this.props.params.text;
    var address = query.address;
    var latitude = 34.0224;
    var longitude = -118.2851;

    if (address) {
      var index = address.indexOf('?lat=');
      if (index > -1) {
        var components = address.split('?lat=');
        address = decodeURI(components[0]);
        latitude = components[1];

        index = latitude.toString().indexOf('?lng=');
        if (index > -1) {
          components = latitude.toString().split('?lng=');
          latitude = components[0];
          longitude = components[1];
        } else {
          longitude = query.lng;
        }
      } else {
        latitude = query.lat;
        longitude = query.lng;
      }
    }

    return {
      doctors: [],
      searchText: searchText,
      address: address,
      latitude: latitude,
      longitude: longitude,
    };
  },

 componentDidMount: function() {
    this.getDoctors();
    this.getInsurances();
    this.getSearchSuggestions();
  },

  getDoctors: function() {
    var params = {};
    if (currentSelectedFilters.insurance) {
      params.insurance_id = currentSelectedFilters.insurance;
    }
    if (currentSelectedFilters.gender) {
      params.gender = currentSelectedFilters.gender;
    }
    if (currentSelectedFilters.rating) {
      params.min_rating = currentSelectedFilters.rating;
    }
    this.serverRequest = $.post('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/search/'
    + this.state.searchText, params).done(function (result) {

      this.setState({
        doctors: result.doctors,
        offset: 0, //sample offset for now
        results: result.num_results,
        totalCount: result.next_cursor
      });

    }.bind(this));
  },

  getInsurances: function() {
    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/insurances')
      .done(function (result) {
        // console.log(result);
      this.setState({
        insurances: result
      });

    }.bind(this));
  },

  getSearchSuggestions: function() {
    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/searchSuggestions', function (result) {

      this.setState({
        searchSuggestions: result,
      });

    }.bind(this));
  },

  filterSelected: function(filtersSelected) {
    currentSelectedFilters = filtersSelected;

    this.getDoctors();
  },

  doctorSelected: function(doctor) {
    this.setState({
      latitude: doctor.practice.latitude,
      longitude: doctor.practice.longitude,
    });
  },

  render: function() {
    return (
      <div className="container-view">
        <TopBar searchSuggestions={this.state.searchSuggestions}
                initialSearchText={this.state.searchText}
                initialAddress={this.state.address}/>
        <FilterBar currentSelectedFilters={currentSelectedFilters} insurances={this.state.insurances} filterSelected={this.filterSelected} offset={this.state.offset} results={this.state.results} totalCount={this.state.totalCount}/>
        <div className="grid">
          <NoResults className={(this.state.results == 0 ? '' : 'hidden')}/>
          <GoogleMap scrollable={false} latitude={this.state.latitude} longitude={this.state.longitude}/>
          <ResultsGrid doctors={this.state.doctors} doctorSelected={this.doctorSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;

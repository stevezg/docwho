var React = require('react');
var TopBar = require('./topbar');
var FilterBar = require('./filter-bar');
var Banner = require('./banner');
var GoogleMap = require('./googlemap');
var ResultsGrid = require('./results-grid');
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
    var params = this.props.location.query;

    var searchText = params.text;
    var address = '';
    var latitude = 34.0224;
    var longitude = -118.2851;
    var index = params.text.indexOf('?address=');

    if (index > -1) {
      var components = params.text.split('?address=');
      searchText = decodeURI(components[0]);
      address = components[1];

      index = address.indexOf('?lat=');
      if (index > -1) {
        components = address.split('?lat=');
        address = decodeURI(components[0]);
        latitude = components[1];

        index = latitude.toString().indexOf('?lng=');
        if (index > -1) {
          components = latitude.toString().split('?lng=');
          latitude = components[0];
          longitude = components[1];
        } else {
          longitude = params.lng;
        }
      } else {
        latitude = params.lat;
        longitude = params.lng;
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
  },

  getDoctors: function() {
    console.log("updating doctors with state");
    console.log(this.state);
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
        <TopBar initialSearchText={this.state.searchText}
                initialAddress={this.state.address}/>
              <FilterBar currentSelectedFilters={currentSelectedFilters} insurances={this.state.insurances} filterSelected={this.filterSelected} offset={this.state.offset} results={this.state.results} totalCount={this.state.totalCount}/>
        <div className="grid">
          <GoogleMap scrollable={false} latitude={this.state.latitude} longitude={this.state.longitude}/>
          <ResultsGrid doctors={this.state.doctors} doctorSelected={this.doctorSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;

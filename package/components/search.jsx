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

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    var params = this.props.location.query;

    var searchText = '';
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
  },

  getDoctors: function() {
    this.serverRequest = $.post('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/search/'
    + this.state.searchText, {
      gender: this.state.gender,
     }).done(function (result) {

      this.setState({
        doctors: result.doctors,
        offset: 0, //sample offset for now
        results: result.num_results,
        totalCount: result.next_cursor
      });

    }.bind(this));
  },

  filterSelected: function(filter) {
    // var params = this.props.location.query;
    // var link = { pathname: '/user/bob', query: { showAge: true } };
    // console.log(link);
    // if (filter == "Gender") {
    //   if (!params.gender) { // no gender filter set yet
    //   params.gender="male";
    //  } else if(params.gender == "male"){
    //   params.gender="female";
    //  } else {
    //   delete params.gender;
    //  }
    // }
    // if (filter == "Rating") {
    //   if (!params.rating) { // no rating filter set yet
    //   params.rating="desc";
    //  } else if(params.rating == "desc"){
    //   params.rating="asc";
    //  } else {
    //   delete params.rating;
    //  }
    // }

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
        <FilterBar filterSelected={this.filterSelected} offset={this.state.offset} results={this.state.results} totalCount={this.state.totalCount}/>
        <div className="grid">
          <GoogleMap scrollable={false} latitude={this.state.latitude} longitude={this.state.longitude}/>
          <ResultsGrid doctors={this.state.doctors} doctorSelected={this.doctorSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;

var React = require('react');
var TopBar = require('./topbar');
var FilterBar = require('./filterbar');
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
    return {
      doctors: [],
      latitude: 34.0224,
      longitude: -118.2851
    };
  },

  componentDidMount: function() {
    var params = this.props.location.query;
    this.getDoctorsFromParams(params);
  },

  getDoctorsFromParams: function(params) {
    console.log(params);
    this.serverRequest = $.post('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/search/'
    + params.text, {
      gender: params.gender,
     }).done(function (result) {
      console.log("searching for " + params.text);
      console.log(result);
      // var doctors = result.map(function(result.doctors) {
      //   var doctor
      //   return speciality['short_name'];
      // });
      //
      this.setState({
        doctors: result.doctors,
        offset: 0, //sample offset for now
        results: result.num_results,
        totalCount: result.next_cursor
      });

    }.bind(this));
  },

  filterSelected: function(filter) {
    var params = this.props.location.query;
    var link = { pathname: '/user/bob', query: { showAge: true } };
    console.log(link);
    if (filter == "Gender") {
      if (!params.gender) { // no gender filter set yet
      params.gender="male";
     } else if(params.gender == "male"){
      params.gender="female";
     } else {
      delete params.gender;
     }
    }
    if (filter == "Rating") {
      if (!params.rating) { // no rating filter set yet
      params.rating="desc";
     } else if(params.rating == "desc"){
      params.rating="asc";
     } else {
      delete params.rating;
     }
    }

    this.getDoctorsFromParams(params);
    // this.goToLinkWithParms('./search', params);
  },

  goToLinkWithParms(link, params) {
    var count = 0;
    for(var key in params){
        if (count == 0) {
          link += "?" + key + "=" + params[key];
        } else {
          link += "&" + key + "=" + params[key];
        }
        count++;
      }
    window.location.href = link;
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
        <TopBar/>
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

var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var GoogleMap = require('./googlemap');
var ResultsGrid = require('./results-grid');
var Router = require('react-router').Router;

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

    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors?speciality_id='
    + params.speciality_id, function (result) {
      console.log(result);
      // var doctors = result.map(function(result.doctors) {
      //   var doctor
      //   return speciality['short_name'];
      // });
      //
      this.setState({
        doctors: result.doctors,
      });

    }.bind(this));

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
        <div className="grid">
          <GoogleMap latitude={this.state.latitude} longitude={this.state.longitude}/>
          <ResultsGrid doctors={this.state.doctors} doctorSelected={this.doctorSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;

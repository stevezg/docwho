var React = require('react');
var TopBar = require('../topbar');
var GoogleMap = require('../googlemap');
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


  render: function() {
    return (
      <div className="container">
        <TopBar/>
        <div className="row">
          <div className = "col-md-3">
            <img className = "doctorProfile" src="images/doc.jpg"></img>
          </div>
          <div className = "col-md-6">
            <div> Doctor Name, MD </div>
            <div> Doctor Name, MD </div>
            <div> Doctor Name, MD </div>
          </div>
          <div className = "col-md-3">
            <h1> Accepted Insurance </h1>
          </div>
        </div>
        <div className="row">
          <GoogleMap latitude={34.0224} longitude={-118.2851}/>
        </div>
        <div className="row">
          <div className = "col-md-9">
              <div> customer reviews MD </div>
          </div>
          <div className = "col-md-3">
            <div> Most frequent procedure  </div>
          </div>

        </div>
        <div className="row">
          <div className = "col-md-6">
            <div> RVIEW AREA 1 </div>
          </div>
          <div className = "col-md-6">
            <div> RVIEW AREA 2 </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;

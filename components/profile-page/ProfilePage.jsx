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

const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '350px',
  width: '100%',
  display: 'inline-block',
  float: 'left'
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
      <div className="container-view">
        <TopBar/>
        <div className="row">
          <br/>
          <div className = "col-md-4">
            <center><img className = "doctorProfile" src="images/doc2.png"  height="300" width="250"></img></center>
          </div>
          <div className = "col-md-4">
            <h3><b> Doctor Name, MD </b></h3>
            <p> Education: college </p>
            <p> Years of Experience: 37 </p>
            <p> Language: English, French </p>
            <p> Tel: (111)111-111 </p>
            <p> Tax: (111)111-111 </p>
            <p> Address: address </p>
          </div>
          <div className = "col-md-4">
            <h3><b> Accepted Insurance </b></h3>
            <p><i> • Insurance 1 </i></p>
            <p><i> • Insurance 2 </i></p>
            <p><i> • Insurance 3 </i></p>
            <p><i> • Insurance 4 </i></p>
          </div>
          <br/>
        </div>
        <br/>
        <br/>
        <p>  </p>
        <div className="row">
          <GoogleMap style={mapStyle} scrollable={false} latitude={34.0224} longitude={-118.2851}/>
        </div>
        <div className="row">
          <div className = "col-md-6">
            <center>
            <h3> Listen to what other customers said  </h3>
            <p> Friendliness: This doctor is very friendly </p>
            <p> Integrity: This doctor is very friendly </p>
            <p> On time: This doctor is very friendly </p>
            <p> Office staff: This doctor is very friendly </p>
            </center>
          </div>
          <div className = "col-md-6">
            <center>
              <br/>
              <p> Most frequent procedure</p>
              <p/>
              <p/>
              <h2><b> Ultra Sound </b></h2>
              <p/>
              <p>15% below average cost</p>
            </center>
          </div>

        </div>
        <div className="row">
          <br/>
          <br/>
          <div className = "col-md-6">
            <center>
            <h4><b> FirstName LastName <small> on MM/DD/YYYY </small></b></h4>
            <br/>
            <p>
              I met with Dr. Kansas again this morning and his staff are AMAZING!
              Nurse Rachel is very professional with an excellent sense of humor!!
              Keep doing what you're doing and I'll keep telling my friends!!
              Thank you for 5 years of care.
            </p>
          </center>
          </div>
          <div className = "col-md-6">
            <center>
            <h4><b> FirstName LastName <small> on MM/DD/YYYY </small></b></h4>
            <br/>
            <p>
              I met with Dr. Kansas again this morning and his staff are AMAZING!
              Nurse Rachel is very professional with an excellent sense of humor!!
              Keep doing what you're doing and I'll keep telling my friends!!
              Thank you for 5 years of care.
            </p>
          </center>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>

    );
  }
});

module.exports = Search;

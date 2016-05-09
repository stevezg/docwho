var React = require('react');
var TopBar = require('./topbar');
var GoogleMap = require('./googlemap');
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

var DoctorProfile = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      doctor: {},
    };
  },

  componentDidMount: function() {
    var params = this.props.location.query;
    var url = 'http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/' + this.props.params.id;
    this.serverRequest = $.get(url, function (result) {
      console.log(result);
      this.setState({
        doctor: result
      });
    }.bind(this));
  },

  renderAboutItem: function(name, value) {
    if (!value) {
      return null;
    }

    return (
      <p>{name}: {value}</p>
    );
  },

  renderAboutArrayItem: function(name, array) {
    if (!array) {
      return null;
    }

    var arrayText = '';
    array.forEach(function(item) {
      if (arrayText.length) {
        arrayText = arrayText.concat(', ').concat(item);
      }
      else {
        arrayText = item;
      }
    });

    var aboutItem = name + ': ' + arrayText;
    return (
      <p>{aboutItem}</p>
    );
  },

  renderAcceptedInsurances: function() {
    if (!this.state.doctor.practice || !this.state.doctor.practice.insurances) {
      return null;
    }

    var header = <h3 className = "profile-list-title">Accepted Insurances</h3>;

    var insurances = this.state.doctor.practice.insurances.map(function(insurance) {
      return <p><i>{insurance}</i></p>;
    });

    return (
      <div>
        {header}
        {insurances}
      </div>
    );
  },

  render: function() {
    // <p>Address: {this.state.doctor.practice.address}</p>

    return (
      <div className="container-view">
        <TopBar/>
        <div className="row">
          <br/>
          <div className = "col-md-3">
            <img className = "doctorProfile profile-rounded-image right-block profile-left-padding profile-top-padding" src={this.state.doctor.image_url}/>
          </div>
          <div className = "col-md-5 text-left profile-list-item">
            <h3 className = "profile-list-title">{this.state.doctor.name}</h3>
            {this.renderAboutItem('Education', this.state.doctor.education)}
            {this.renderAboutItem('Years Experience', this.state.doctor.years_experience)}
            {this.renderAboutArrayItem('Languages', this.state.doctor.languages)}
            {this.renderAboutItem('Phone', this.state.doctor.phone_number)}
            {this.renderAboutItem('Fax', this.state.doctor.fax_number)}
          </div>
          <div align = "right" className = "col-md-4 text-left profile-list-item profile-section-border-left" >
            {this.renderAcceptedInsurances()}
          </div>
          <br/>
        </div>
        <br/>
        <p>  </p>
        <div className="row">
          <GoogleMap style={mapStyle} scrollable={false} latitude={34.0224} longitude={-118.2851}/>
        </div>
        <br/>
        <div className="row">
          <div className = "col-md-6 text-left profile-section-border-right profile-list-item profile-left-padding">
            <h3 className = "profile-list-title"> Listen to what other patients said </h3>
            <p> Friendliness: This doctor is very friendly </p>
            <p> Integrity: This doctor is very friendly </p>
            <p> On time: This doctor is very friendly </p>
            <p> Office staff: This doctor is very friendly </p>
          </div>
          <div className = "col-md-6 profile-section-border profile-list-item">
            <center>
              <br/>
              <p> Most frequent procedure</p>
              <p/>
              <p/>
              <h2 className = "profile-list-title"> Ultra Sound </h2>
              <p/>
              <p>15% below average cost</p>
            </center>
          </div>

        </div>
        <div className="row text-left">
          <br/>
          <br/>
          <div className = "col-md-6 profile-section-border-top-right profile-list-item profile-left-padding">
            <h4 className = "profile-list-title">FirstName LastName <small> on MM/DD/YYYY </small></h4>
            <br/>
            <p>
              I met with Dr. Kansas again this morning and his staff are AMAZING!
              Nurse Rachel is very professional with an excellent sense of humor!!
              Keep doing what you're doing and I'll keep telling my friends!!
              Thank you for 5 years of care.
            </p>
          </div>
          <div className = "col-md-6 profile-section-border-top profile-list-item">
            <h4 className = "profile-list-title">FirstName LastName <small> on MM/DD/YYYY </small></h4>
            <br/>
            <p>
              I met with Dr. Kansas again this morning and his staff are AMAZING!
              Nurse Rachel is very professional with an excellent sense of humor!!
              Keep doing what you're doing and I'll keep telling my friends!!
              Thank you for 5 years of care.
            </p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>

    );
  }
});

module.exports = DoctorProfile;

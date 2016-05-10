var React = require('react');
var TopBar = require('./topbar');
var Rating = require('./rating');
var Tag = require('./tag');
var GoogleMap = require('./google-map');
var Reviews = require('./reviews');

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
  float: 'left',
  margin: '0 15px',
};

var DoctorProfile = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      doctor: {},
      practice: {},
    };
  },

  componentDidMount: function() {
    var params = this.props.location.query;
    var url = 'http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/' + this.props.params.id;
    this.doctorServerRequest = $.get(url, function (result) {
      var doctor = result;
      var practice = doctor.practice ? doctor.practice : {};
      delete doctor.practice;

      this.setState({
        doctor: doctor,
        practice: practice
      });
    }.bind(this));

    var url = 'http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/' + this.props.params.id + '/reviews';
    this.reviewsServerRequest = $.get(url, function (result) {
      this.setState({
        reviews: result
      });
    }.bind(this));
  },

  renderAboutItem: function(value) {
    if (!value) {
      return null;
    }

    return (
      <p className="doctor-about-item">{value}</p>
    );
  },

  renderAboutPhoneItem: function(value) {
    if (!value) {
      return null;
    }

    var ref = "tel:" + value.replace(/\D+/g, '');

    return (
      <a href={ref} className="doctor-about-item">{value}</a>
    );
  },

  renderAboutArrayItem: function(array) {
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

    return (
      <p className="doctor-about-item">Speaks {arrayText}</p>
    );
  },

  renderAboutHeaderItem: function(value) {
    if (!value) {
      return null;
    }

    return (
      <p className="doctor-about-item header">{value}</p>
    );
  },

  renderAcceptedInsurances: function() {
    if (!this.state.practice || !this.state.practice.insurances) {
      return null;
    }

    var header = <h3 className = "profile-list-title">Accepted Insurances</h3>;

    var insurances = this.state.practice.insurances.map(function(insurance) {
      return <p className="doctor-about-item">{insurance}</p>
    });

    return (
      <div>
        {header}
        {insurances}
      </div>
    );
  },

  renderTags: function(speciality) {
    var tagsText = ['Friendly', 'On Time', 'Knowledgable'];
    var tags = [];

    tagsText.forEach(function(text) {
      tags.push(<Tag text={text} speciality={speciality}/>);
      tags.push(<div className="tag-gap"/>);
    });

    return (
      <div>
        {tags}
      </div>
    );
  },

  render: function() {
    return (
      <div className="container-view">
        <TopBar/>
        <div className="row">
          <br/>
          <div className = "col-md-7 text-left profile-about-container">
            <div className="profile-about">
              <img className = "doctorProfile profile-rounded-image right-block" src={this.state.doctor.image_url}/>
              <div className="profile-about-items">
                <h3 className="profile-list-title">{this.state.doctor.name}</h3>
                <p className="doctor-about-item speciality">{this.state.doctor.speciality}</p>
                <Rating rating={this.state.doctor.rating}/>
                <p className="review-count-text">{this.state.doctor.rating_count} Reviews</p>
                {this.renderTags(this.state.doctor.speciality)}
                <br/>
                {this.renderAboutItem(this.state.doctor.education)}
                {this.renderAboutItem(this.state.doctor.years_experience)}
                {this.renderAboutArrayItem(this.state.doctor.languages)}
                {this.renderAboutPhoneItem(this.state.doctor.phone_number)}
                <br/>
                {this.renderAboutHeaderItem(this.state.practice.name)}
                {this.renderAboutItem(this.state.practice.address)}
              </div>
            </div>
            </div>
          <div align="right" className = "col-md-5 text-left profile-list-item profile-section-border-left doctor-insurances">
            {this.renderAcceptedInsurances()}
          </div>
          <br/>
        </div>
        <div className="row">
          <GoogleMap style={mapStyle}
                     scrollable={false}
                     latitude={this.state.practice.latitude}
                     longitude={this.state.practice.longitude}/>
        </div>
        <div className="row">
          <h3 className="section-header reviews">Reviews</h3>
        </div>
        <div className="row">
          <Reviews reviews={this.state.reviews}/>
        </div>
      </div>
    );
  }
});

module.exports = DoctorProfile;

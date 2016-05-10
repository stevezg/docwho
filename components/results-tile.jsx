var React = require('react');
var Rating = require('./rating');
var Tag = require('./tag');
var Link = require('react-router').Link;

var ResultsTile = React.createClass({
  propTypes: {
    doctor: React.PropTypes.object,
    doctorSelected: React.PropTypes.func,
  },

  handleHover: function() {
    this.props.doctorSelected(this.props.doctor);
  },

  formatPhoneNumber: function(number) {
    return number;
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

  renderTags: function(speciality) {
    var tagsText = ['Friendly', 'On Time'];
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
    var link = '/doctors/' + this.props.doctor.id;

    return (
      <div className="profile-card">
        <img className = "search-result-image" src={this.props.doctor.image_url}/>
        <div className="search-result-about-items">
          <Link className="search-result-name" to={link}>{this.props.doctor.name}</Link>
          <p className="search-result-item speciality">{this.props.doctor.speciality}</p>
          <Rating rating={this.props.doctor.rating}/>
          <p className="review-count-text">{this.props.doctor.rating_count} Reviews</p>
          {this.renderTags(this.props.doctor.speciality)}
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;

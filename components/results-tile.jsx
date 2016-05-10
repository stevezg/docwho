var React = require('react');
var Rating = require('./rating');
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

  render: function() {
    var link = '/doctors/' + this.props.doctor.id;

    return (
      <div className="profile-card" onMouseOver={this.handleHover}>
        <div className="col-md-8 col-md-8">
          <Link className="name" to={link}>{this.props.doctor.name}</Link>
        </div>
        <div className="col-md-4 col-md-4">
          <Rating rating={this.props.doctor.rating}/>
        </div>
        <div className="col-md-12 col-md-12">
          <h4 className="speciality">{this.props.doctor.speciality}</h4>
        </div>
        <div className="col-md-12 col-md-12">
          <p>{this.formatPhoneNumber(this.props.doctor.phone_number)}</p>
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;

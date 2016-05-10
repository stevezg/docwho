var React = require('react');
var Rating = require('./rating');

var ResultsTile = React.createClass({
  propTypes: {
    doctor: React.PropTypes.object,
    doctorSelected: React.PropTypes.func,
  },

  handleHover: function() {
    this.props.doctorSelected(this.props.doctor);
  },

  handleClick: function() {
    var link = "./doctor?id=" + this.props.doctor.id;
    window.location.href = link;
  },

  formatPhoneNumber: function(number) {
    return number;
  },

  render: function() {
    return (
      <div className="profile-card" onClick={this.handleClick} onMouseOver={this.handleHover}>
        <div className="col-md-8 col-md-8">
          <h3 className="name">{this.props.doctor.name}</h3>
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

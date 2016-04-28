var React = require('react');
var ResultsTile = React.createClass({
  propTypes: {
    doctor: React.PropTypes.object,
    doctorSelected: React.PropTypes.func,
  },

  handleClick: function() {
    this.props.doctorSelected(this.props.doctor);
  },

  render: function() {
    return (
      <div className="profile-card" onClick={this.handleClick}>
        <div className="col-md-8 col-md-8">
          <h3>{this.props.doctor.name}</h3>
        </div>
        <div className="col-md-4 col-md-4">
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
        </div>
        <div className="col-md-12 col-md-12">
          <p>{this.props.doctor.speciality}</p>
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;

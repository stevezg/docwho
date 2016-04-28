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
    var rating = [];
    if (this.props.doctor.rating > 0) {
      for (var i = 1; i < this.props.doctor.rating; i++) {
        rating.push(<i className="fa fa-star rating-star" aria-hidden="true"></i>);
      }

      if (this.props.doctor.rating - Math.floor(this.props.doctor.rating) >= 0.5) {
        rating.push(<i className="fa fa-star-half rating-star" aria-hidden="true"></i>);
      }
    }
    else {
      rating.push(<h4 className="no-reviews">No Reviews</h4>)
    }

    return (
      <div className="profile-card" onClick={this.handleClick}>
        <div className="col-md-8 col-md-8">
          <h3 className="name">{this.props.doctor.name}</h3>
        </div>
        <div className="col-md-4 col-md-4">
          {rating}
        </div>
        <div className="col-md-12 col-md-12">
          <h4 className="speciality">{this.props.doctor.speciality}</h4>
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;

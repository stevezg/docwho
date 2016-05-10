var React = require('react');

var Rating = React.createClass({
  propTypes: {
    rating: React.PropTypes.number,
  },

  render: function() {
    var rating = [];
    if (this.props.rating > 0) {
      for (var i = 1; i <= this.props.rating; i++) {
        rating.push(<i className="fa fa-star rating-star" aria-hidden="true"/>);
      }

      if (this.props.rating - Math.floor(this.props.rating) >= 0.5) {
        rating.push(<i className="fa fa-star-half rating-star" aria-hidden="true"/>);
      }
    }
    else {
      rating.push(<h4 className="no-reviews">No Reviews</h4>)
    }

    return (
      <div className="stars">
        {rating}
      </div>
    );
  }
});

module.exports = Rating;

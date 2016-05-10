var React = require('react');
var Review = require('./review');

var Reviews = React.createClass({
  propTypes: {
    reviews: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      reviews: [],
    };
  },

  render: function() {
    console.log('Reviews Length: ' + this.props.reviews.length);

    return (
      <div className="reviews">
        {this.props.reviews.map(function(review){
          return <Review id={review.id} review={review}/>;
        })}
      </div>
    );
  }
});

module.exports = Reviews;

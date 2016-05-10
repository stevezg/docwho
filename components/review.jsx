var React = require('react');
var Rating = require('./rating');

var Review = React.createClass({
  propTypes: {
    review: React.PropTypes.object,
  },

  render: function() {
    var date = new Date(this.props.review.date);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dateStr = month+"/"+day+"/"+year;

    var imageURL = 'https:' + this.props.review.external_user.image_url;

    return (
      <div className="review-container-view">
        <div className="row">
          <br/>
          <div className = "col-md-2 text-left review-user-container">
            <div className="review-user">
              <img className = "review-user-image" src={imageURL}/>
              <h3 className="review-user-name">{this.props.review.external_user.name}</h3>
            </div>
          </div>
          <div align="right" className = "col-md-10 text-left review-text-container">
            <div className="rating-container">
              <Rating rating={this.props.review.rating}/>
              <h3 className="review-date">{dateStr}</h3>
            </div>
            <p className="review-text">
              {this.props.review.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Review;

var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    return (
      <div className="container-view">
        <h4 className="not-found-text">Page Does Not Exist</h4>
        <Link to={'/'}>
          <h4 className="go-back">Go Back</h4>
        </Link>
      </div>
    );
  }
});

module.exports = NotFound;

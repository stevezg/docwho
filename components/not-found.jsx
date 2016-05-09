var React = require('react');

var NotFound = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    return (
      <div className="container-view">
        <h3 className="section-header">Page Does Not Exist</h3>
      </div>
    );
  }
});

module.exports = NotFound;

var React = require('react');

var NoResults = React.createClass({


  render: function() {
    return (
      <div className={'no-results ' + this.props.className}>
        <span className="no-results-message"><h1>{this.props.message}</h1></span>
      </div>
    );
  }
});

module.exports = NoResults;

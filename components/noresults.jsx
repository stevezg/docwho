var React = require('react');

var NoResults = React.createClass({


  render: function() {
    return (
      <div className={'no-results ' + this.props.className}>
        <h1>NO RESULTS</h1>
      </div>
    );
  }
});

module.exports = NoResults;

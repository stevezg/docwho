var React = require('react');

var NoResults = React.createClass({


  render: function() {
    return (
      <div className={'no-results ' + this.props.className}>
        <h3 className="no-results-message" dangerouslySetInnerHTML={{__html: this.props.message}}></h3>
      </div>
    );
  }
});

module.exports = NoResults;

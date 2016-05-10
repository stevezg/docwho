var React = require('react');

var NoResults = React.createClass({


  render: function() {
    return (
      <div className={'no-results ' + this.props.className}>
        <span className="no-results-message"><h3 dangerouslySetInnerHTML={{__html: this.props.message}}></h3></span>
      </div>
    );
  }
});

module.exports = NoResults;

var React = require('react');

var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    className: React.PropTypes.string,
  },

  render: function() {
    var className = "themed-button " + this.props.className;
    return (
      <button className={className}>
        {this.props.text}
      </button>
    );
  }
});

module.exports = Button;

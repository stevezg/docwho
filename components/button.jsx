var React = require('react');

var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
  },

  getInitialState: function () {
    return {hover: false};
  },

  mouseOver: function () {
    this.setState({hover: true});
  },

  mouseOut: function () {
    this.setState({hover: false});
  },

  onClick: function() {
    this.props.onClick();
  },

  render: function() {
    var highlighted = this.state.hover ? ' highlighted' : '';
    var className = 'themed-button ' + this.props.className + highlighted;
    return (
      <button className={className} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}>
        {this.props.text}
      </button>
    );
  }
});

module.exports = Button;

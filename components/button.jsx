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
    this.props.onClick(this);
  },

  render: function() {
    var highlighted = this.state.hover ? ' highlighted' : '';
    var className = 'themed-button ' + this.props.className + highlighted;
    var text = this.props.text;
    return (
      <button className={className} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}>
        {text}
      </button>
    );
  }
});

module.exports = Button;

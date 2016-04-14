var React = require('react');

var TextField = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string,
    icon_url: React.PropTypes.string,
  },

  render: function() {
    if (this.props.icon_url) {
      var style = {
        backgroundImage: 'url(' + this.props.icon_url + ')',
        backgroundSize: '12px 14px',
        backgroundPosition: '10px center',
        backgroundRepeat: 'no-repeat',
      };

      return (
        <input className="themed-text-field"
               style={style}
               placeholder={this.props.placeholder}>
        </input>
      );
    }

    return (
      <input className="themed-text-field"
             placeholder={this.props.placeholder}>
      </input>
    );
  }
});

module.exports = TextField;

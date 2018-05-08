var React = require('react');
var markerStyle = require('./marker_style');

var Marker = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    lat: React.PropTypes.any,
    lng: React.PropTypes.any
  },

  getDefaultProps: function() {
    return {} ;
  },

  render: function() {console.log(markerStyle);
    return (
      <div style={markerStyle}>
         {this.props.text}
         {this.props.lat}
         {this.props.lng}
      </div>
    );
  }
});

module.exports = Marker;

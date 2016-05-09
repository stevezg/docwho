var React = require('react');
var Router = require('react-router');

var autoComplete;

var TextField = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    icon_url: React.PropTypes.string,
    placeChanged: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      name: '',
      placeholder: '',
      value: '',
      icon_url: '',
    };
  },

  getInitialState: function() {
    return {value: this.props.value};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  componentWillReceiveProps: function (newProps) {
    if(newProps.googleAutoComplete) {
      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(28.70, -127.50),
        new google.maps.LatLng(48.85, -55.90)
      );

        var input = document.getElementsByName("location")[0];
        var options = {
          bounds: defaultBounds
          // types: ['establishment'] //we want the user to be able to search all addresses
        };

        autoComplete = new google.maps.places.Autocomplete(input, options);
        autoComplete.addListener('place_changed', this.onPlaceChanged);
      }
    },

    onPlaceChanged: function() {
      var place = autoComplete.getPlace();
      this.setState({value: place.formatted_address});

      if (place.geometry) {
        var location = place.geometry.location;

        this.props.placeChanged(place.formatted_address, place.geometry.location.lat(), place.geometry.location.lng());
      }
    },

    render: function() {
      var style = {};
      if (this.props.icon_url) {
        style = {
          backgroundImage: 'url(' + this.props.icon_url + ')',
          backgroundSize: '10px 14px',
          backgroundPosition: '12px center',
          backgroundRepeat: 'no-repeat',
        };
      }

      return (
        <input className="themed-text-field"
               style={style}
               name={this.props.name}
               placeholder={this.props.placeholder}
               value={this.state.value}
               onChange={this.handleChange}>
        </input>
      );
    }
  });

  module.exports = TextField;

var React = require('react');
var Router = require('react-router');

var autoComplete;

var TextField = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    icon_url: React.PropTypes.string,
    placeChanged: React.PropTypes.func,
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
      if (place.geometry) {
        var location = place.geometry.location;

        this.props.placeChanged(place.address, place.geometry.location.lat(), place.geometry.location.lng());
      }
    },

    render: function() {
      if (this.props.icon_url) {
        var style = {
          backgroundImage: 'url(' + this.props.icon_url + ')',
          backgroundSize: '10px 14px',
          backgroundPosition: '12px center',
          backgroundRepeat: 'no-repeat',
        };

        return (
          <input className="themed-text-field"
            style={style}
            name={this.props.name}
            placeholder={this.props.placeholder}>
          </input>
        );
      }

      return (
        <input className="themed-text-field"
          name={this.props.name}
          placeholder={this.props.placeholder}>
        </input>
      );
    }
  });

  module.exports = TextField;

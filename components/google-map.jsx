var mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '600px',
  width: '70%',
  display: 'inline-block',
  float: 'left'
};

var GoogleMap = React.createClass({

  getDefaultProps: function () {
    return {
      initialZoom: 14
    };
  },
  getInitialState: function() {
    return {
      map: null
    };
  },

  componentWillReceiveProps: function (newProps) {
    if (this.state && this.state.latitude && newProps.latitude == this.state.latitude && newProps.longitude == this.state.longitude) {
      return;
    }

    if(newProps.style) {
      mapStyle = newProps.style;
    }

    let coordinate = this.getCoordinate(newProps.latitude, newProps.longitude);

    let mapOptions = {
      center: coordinate,
      zoom: this.props.initialZoom
    };

    if(newProps.scrollable == false) {
      mapOptions.scrollwheel = false;
    }

    let map = new google.maps.Map(this.getDOMNode(), mapOptions);
    let marker = new google.maps.Marker({position:coordinate, title: 'Hi', map: map});

    this.setState({
      latitude: newProps.latitude,
      longitude: newProps.longitude
    });
  },

  getCoordinate: function (latitude, longitude) {
    return new google.maps.LatLng(latitude, longitude);
  },

  render: function () {
    return (
      <div className='map-gic' style={mapStyle}></div>
    );
  }
});

module.exports = GoogleMap;

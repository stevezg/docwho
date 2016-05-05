var mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '600px',
  width: '75%',
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
    console.log(newProps.style);
    mapStyle = newProps.style;
  }

    let mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    };

    let map = new google.maps.Map(this.getDOMNode(), mapOptions);
    let marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

    this.setState({
      latitude: newProps.latitude,
      longitude: newProps.longitude
    });
  },

  mapCenterLatLng: function () {
    let props = this.props;
    return new google.maps.LatLng(props.latitude, props.longitude);
  },

  render: function () {
    return (
      <div className='map-gic' style={mapStyle}></div>
    );
  }
});

module.exports = GoogleMap;

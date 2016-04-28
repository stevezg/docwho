const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
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
    if (this.state.map == null) {
      let mapOptions = {
        center: this.mapCenterLatLng(),
        zoom: this.props.initialZoom
      };
      this.setState({
        map: new google.maps.Map(this.getDOMNode(), mapOptions),
      });
    }
    if (this.state.map != null) {
      let marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: this.state.map});
      if (this.state.map.getBounds().contains(marker.getPosition()) == false) {
        marker.setMap(this.state.map);
      }
      this.state.map.setCenter(marker.getPosition());
    }

  },

  mapCenterLatLng: function () {
    var props = this.props;
    return new google.maps.LatLng(props.latitude, props.longitude);
  },

  render: function () {
    return (
      <div className='map-gic' style={mapStyle}></div>
    );
  }
});

module.exports = GoogleMap;

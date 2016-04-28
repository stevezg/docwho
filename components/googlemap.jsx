const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '500px',
  width: '75%',
  display: 'inline-block',
  float: 'left'
};

var GoogleMap = React.createClass({

  getDefaultProps: function () {
    return {
      initialZoom: 11,
    };
  },

  componentWillReceiveProps: function (newProps) {

    let mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    };

    let map = new google.maps.Map(this.getDOMNode(), mapOptions);
    let marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
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

const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '500px',
  width: '75%',
  display: 'inline-block',
  float: 'left'
};

var map;

var GoogleMap = React.createClass({
  statics: {
    showMarker: function(practiceLocation) {
      console.log(practiceLocation);
    // obj.setState({test: "gi"});
    //   var practiceLatLng = {lat: practiceLocation.latitude, lng: practiceLocation.longitude};
    //   // console.log(practiceLocation);
    //   var mapOptions = {
    //     center: practiceLatLng,
    //     zoom: 6
    //   };
    //   // map = new google.maps.Map(this.getDOMNode(), mapOptions);
    //   var marker = new google.maps.Marker({position: practiceLatLng, title: 'Hi', map: map});
    //   GoogleMap.setState({map: map});
    }
  },
  getDefaultProps: function () {
    return {
      initialZoom: 6,
      mapCenterLat: 53.5333,
      mapCenterLng: -113.4073126
    };
  },
  componentDidMount: function (rootNode) {
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    },
    map = new google.maps.Map(this.getDOMNode(), mapOptions);
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
    this.setState({map: map});
  },
  mapCenterLatLng: function () {
    var props = this.props;

    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  },
  render: function () {

    return (
      <div className='map-gic' style={mapStyle}></div>
    );
  }
});

module.exports = GoogleMap;

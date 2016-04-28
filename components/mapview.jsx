const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '500px',
  width: '75%',
  display: 'inline-block',
  float: 'left'
};
var GoogleMap = React.createClass({
getDefaultProps: function () {
    return {
        initialZoom: 12,
        mapCenterLat: 34.0224,
        mapCenterLng: -118.2851
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

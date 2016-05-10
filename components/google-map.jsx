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
      map: null,
      selectedAddress: null
    };
  },

  componentWillReceiveProps: function (newProps) {
    if (this.state && this.state.latitude && newProps.latitude == this.state.latitude && newProps.longitude == this.state.longitude) {
      return;
    }
    this.getAddress(newProps.latitude, newProps.longitude);
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
    console.log(coordinate);
    let marker = new google.maps.Marker({position:coordinate, title: 'Hi', map: map});
    console.log(marker);
    if (newProps.doctorSelected) {
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + newProps.doctorSelected.name + '</h1>'+
      '<div id="bodyContent">'+
      '<p>' + this.state.selectedAddress + '</p>' +
      '</div>'+
      '</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

    this.setState({
      latitude: newProps.latitude,
      longitude: newProps.longitude
    });
  },

  getCoordinate: function (latitude, longitude) {
    return new google.maps.LatLng(latitude, longitude);
  },

  getAddress: function (latitude, longitude) {
    $.get('http://maps.google.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude)
    .done(function (response) {
      this.setState({
        selectedAddress: response.results[0].formatted_address
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div className={'map-gic ' + this.props.className} style={mapStyle}></div>
    );
  }
});

module.exports = GoogleMap;

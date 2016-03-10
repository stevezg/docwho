$(document).ready(function () {
    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById("googleMaps"), mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
$(document).ready(function () {
    function initialize() {
        var mapProp = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById("googleMaps"), mapProp);
        var geocoder = new google.maps.Geocoder();
        var address = "757 Westwood Plz, Los Angeles, CA, 90095";
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
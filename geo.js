function showPosition (position) {
	var latitude = position.coords.latitude;
	var longtitude = position.coords.longitude;
	var latLng = new google.maps.LatLng(latitude, longtitude);

	var mapOptions = {
      center: latLng,
      zoom: 50
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    var marker = new google.maps.Marker({
    	position: latLng,
    	map: map
    });
}

function initialize() {
	navigator.geolocation.getCurrentPosition(showPosition);
}


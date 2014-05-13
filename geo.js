var $ = function(value) {
	return document.getElementById(value);
};

var Map = { 
	destination : null,
	localPoint : new google.maps.Geocoder(),
	destLat : 0,
	destLng : 0
};

Map.init = function() {
	navigator.geolocation.getCurrentPosition(this.showPosition);

};

Map.showPosition = function(position){
	var latitude = position.coords.latitude;
	var longtitude = position.coords.longitude;
	var latLng = new google.maps.LatLng(latitude, longtitude);	// my position

	var mapOptions = {
      center: latLng,
      zoom: 8
    };

    var map = new google.maps.Map($("map_canvas"), mapOptions);	// draw map

    var marker = new google.maps.Marker({
    	position: latLng,
    	map: map
    });
    return [latitude,longtitude,map];
};


window.addEventListener('load', function() {
	Map.init.call(Map);

	$('bt-go').addEventListener('click', function(e){
		e.preventDefault();

		Map.destination = $('destination').value;
		Map.localPoint.geocode({'address': Map.destination}, function (results, status){
			if(status == google.maps.GeocoderStatus.OK){
				Map.destLat = results[0].geometry.location.lat();
				Map.destLng = results[0].geometry.location.lng();

				var marker = new google.maps.Marker({
    			position: new google.maps.LatLng(Map.destLat, Map.destLng),
    			map: Map.map
   				 });
			}
		})

	}, false);

}, false);


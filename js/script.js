
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 4
  });
  
  	// Add some markers
	var markers = [
		{lat: 40.7128, lng: -74.0060, title: 'New York, NY'},
		{lat: 34.0522, lng: -118.2437, title: 'Los Angeles, CA'},
		{lat: 41.8781, lng: -87.6298, title: 'Chicago, IL'}
	];
	var mapMarkers = [];
	for (var i = 0; i < markers.length; i++) {
		var marker = new google.maps.Marker({
			position: markers[i],
			map: map,
			title: markers[i].title
		});
		mapMarkers.push(marker);
	}
	
	var circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat: 41.8781, lng: -87.6298},
    radius: 1000
  });
  
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer({
    map: map
  });

  calculateAndDisplayRoute(directionsService, directionsRenderer);
}
window.initMap =initMap;

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route({
    origin: 'San Francisco, CA',
    destination: 'Los Angeles, CA',
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
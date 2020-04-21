function initMap() {
var map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 30.452044, lng: -97.758893},
		zoom: 18
	});
	var housePosition={lat: 30.452044, lng: -97.758893};
		var point = new google.maps.Marker({
					position: housePosition,
					map: map,
					title: 'House'
		});
}
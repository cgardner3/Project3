function initMap() {
	var house = {lat: 30.452044, lng: -97.758893};
	var map = new google.maps.Map(document.getElementById('map'),{
		center: house, 
		zoom: 18});

	var infowindow = new google.maps.InfoWindow({
		content: 'My House on the Resume'
	});

	var marker = new google.maps.Marker({
		position: house,
		map: map,
		title: 'My House in Austin'
	});

	marker.addListener('click', function(){
		infowindow.open(map,marker);
	});
}
google.maps.event.addDomListener(window,'load',init);
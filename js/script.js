function initMap() {
	var house = {lat: 41.839010, lng: -87.628676};
	var map = new google.maps.Map(document.getElementById('map'),{
		center: house, 
		zoom: 18});

	var infowindow = new google.maps.InfoWindow({
		content: 'Stuart Field where the Scarlet Hawks Play'
	});

	var marker = new google.maps.Marker({
		position: house,
		map: map,
		title: 'Home of the Amazing Scarlet Hawks'
	});

	marker.addListener('click', function(){
		infowindow.open(map,marker);
	});
}
google.maps.event.addDomListener(window,'load',init);
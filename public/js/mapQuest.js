function initMap() {
	// add your code here
	L.mapquest.key = 'KEY';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8785203,-117.2380747,17],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});
	//Add a marker to the map
	L.marker([32.8785203,-117.2380747,17]).addTo(map);

}
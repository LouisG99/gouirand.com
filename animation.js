const loc_coords = { 
	'Nice': {lat: 43.703908, lng: 7.273409}, 
	'Beausoleil': {lat: 43.742177, lng: 7.424605}, 
};

var map = null; 
var marker = null;

function showMap(cabinet) {
	initMap();
	
	var choose = document.getElementsByClassName("choose-city")[0];
	choose.style.opacity = '0';
	choose.style.visibility = "hidden";

	var goal = loc_coords[cabinet];

	map.setCenter(goal);
	marker = new google.maps.Marker({position: goal, map: map});

	var mapElem = document.getElementById("GoogleMap");
	mapElem.style.visibility = 'visible';
	mapElem.style.opacity = '1';

	var class_name = "directions-"+cabinet; 
	var descript = document.getElementsByClassName(class_name)[0];
	descript.style.visibility = 'visible';
	descript.style.opacity = '1';

	var back = document.getElementsByClassName("back")[0];
	back.style.visibility = "visible";
	back.style.opacity = '1';
}

function initMap() {
	var goal = loc_coords['Nice'];
	map = new google.maps.Map(
	document.getElementById('GoogleMap'), {zoom: 16, center: goal});
}

function goBack() {
	var mapElem = document.getElementById("GoogleMap");
	mapElem.style.visibility = 'hidden';
	mapElem.style.opacity = '0';

	var back = document.getElementsByClassName("back")[0];
	back.style.visibility = "hidden";
	back.style.opacity = '0';

	var descript = document.getElementsByClassName("directions");
	for (var i = 0; i < descript.length; i++){
		descript[i].style.visibility = 'hidden';
		descript[i].style.opacity = '0';
	}

	var choose = document.getElementsByClassName("choose-city")[0];
	choose.style.opacity = '1';
	choose.style.visibility = "visible";
}
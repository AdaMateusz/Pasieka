var map;
var scoutBaseAdress = new google.maps.LatLng(51.786950, 19.417350);
        
function initMap() {
    // Directions variables
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    
    //Draw the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 51.786950, lng: 19.417350} , // scoutBaseAdress
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.HYBRID
            ]
        },
        fullscreenControl: true
    });
    
    // Initialize Marker
    var markerOptions = {
        position: {lat: 51.786950, lng: 19.417350},
        map: map,
        title: 'Harcówka'
    };
    
    var marker = new google.maps.Marker(markerOptions);
    
    directionsDisplay.setMap(map);
    
    var onSubmitForm = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    
    document.getElementById('transportMode').addEventListener('change', onSubmitForm);
    document.getElementById('submitButton').addEventListener('click' , onSubmitForm);
    $('#startPointAdress').keypress(function (e) {
        if (e.which == 13) {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
            return false; 
        }
    });
    
}


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('transportMode').value;
    var startPoint = document.forms['localizationForm'].startPointAdress.value;
    
    var request = {
        origin: startPoint,
        destination: {lat: 51.786950, lng: 19.417350}, // scoutBaseAdress 
        travelMode: google.maps.TravelMode[selectedMode]
    };
    
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        } 
        else {
          window.alert('Directions request failed due to ' + status);
        }
    });
    return false;
}


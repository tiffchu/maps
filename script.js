

function initMap() {
    var location = { lat: 49.1666, lng: -123.1336 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location,
        mapId: 'c0018757663e05b3'
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
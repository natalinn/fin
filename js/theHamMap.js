/**
 * Created by User on 11.09.2017.
 */
(function() {
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            center: new google.maps.LatLng(49.832584, 23.993503099999998),

            styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#ffcc00"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#bfc0c1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"color":"#336699"},{"weight":"0.01"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"1.71"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"weight":"0.89"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"color":"#ffcc00"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"hue":"#ff6600"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"weight":"0.01"},{"lightness":"0"},{"color":"#606060"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#336699"},{"visibility":"on"}]}]
        };

        var mapElement = document.getElementById('theHamMap');

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(49.832584, 23.993503099999998),
            map: map,
            icon: 'img/map-marker.png',
            title: "QALight"
        });

        var contentString = 'Hello world! QALight is here!';

        var infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
})();
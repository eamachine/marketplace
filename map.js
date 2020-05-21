
var shops = [
    {
        "title": 'Peludos',
        "lat": '4.6193564',
        "lng": '-74.0841302',
        "icon": 'img/icon1.png',
        "description": '<div><h1>Peludos</h1><p>Calle 53 # 12 - 51</p><p>veterinaria etc.</p><a href="https://mundomascotas.co/presta17/azupet">e-commerce</a></div>'
    },
    {
        "title": 'Mundo Mascotas',
        "lat": '4.719309',
        "lng": '-74.084088',
        "icon": 'img/icon2.png',
        "description": '<div><h1>Mundo Mascotas</h1><p>Calle 53 # 12 - 51</p><p>veterinaria etc.</p><a href="https://mundomascotas.co/presta17/azupet">e-commerce</a></div>'
    },
    {
        "title": 'Fus mascotas',
        "lat": '4.613464',
        "lng": '-74.0841302',
        "icon": 'img/icon1.png',
        "description": '<div><h1>Fus Mascotas</h1><p>Calle 53 # 12 - 51</p><p>veterinaria etc.</p><a href="https://mundomascotas.co/presta17/azupet">e-commerce</a></div>'
    },
    {
        "title": 'Bebe Mascotas',
        "lat": '4.619309',
        "lng": '-74.284088',
        "icon": 'img/icon2.png',
        "description": '<div><h1>Bebe Mascotas</h1><p>Calle 53 # 12 - 51</p><p>veterinaria etc.</p><a href="https://mundomascotas.co/presta17/azupet">e-commerce</a></div>'
    }
];

var map;

    //get geolocation
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
        } else {
        x.innerHTML = "Geolocation is not supported";
        }
    }

    // Initialize and add the map
    function initMap(position) {
    console.log(position);

    var location = {lat: position.coords.latitude, lng: position.coords.longitude};
    var mapOptions = {
        zoom: 16,
        center: location
    }

    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), mapOptions);
    
    //info Window
    var infoWindow = new google.maps.InfoWindow();
    
    // The marker address
    var addressOptions = {
        position: location, 
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'img/logo.png',
            scaledSize: new google.maps.Size(24, 24), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }
    };

    var addressMarker = new google.maps.Marker(addressOptions);
    addressMarker.addListener('click', toggleBounce);
    addressMarker.addListener('dragend', 
    function(evt) 
    {
        console.log(addressMarker);
        console.log(evt);
        geocodePosition(addressMarker);

    });

    //add shops
    for (var i = 0; i < shops.length; i++) { 
        var data = shops[i]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var markeritem = new google.maps.Marker(
            {   position: myLatlng, 
                map: map,
                icon: {
                    url: data.icon,
                    scaledSize: new google.maps.Size(24, 24), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                },
                title: data.title,
                description: data.description
            });
            markeritem.addListener('click', function(){
                var infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent(this.description);
                infoWindow.open(map, this);
            });
    }

  }

    function toggleBounce() {
        if (this.getAnimation() !== null) {
            this.setAnimation(null);
        } else {
            this.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function geocodePosition(marker) 
    {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode
        ({
            latLng: marker.getPosition()
        }, 
            function(results, status) 
            {
                if (status == google.maps.GeocoderStatus.OK) 
                {
                    setInfoWindow(marker, results[0].formatted_address);
                } 
                else 
                {
                    console.log('Cannot determine address at this location.'+status);
                }
            }
        );
    }

  function setInfoWindow(marker, content) {    
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  }


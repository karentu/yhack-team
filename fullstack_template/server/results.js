addDomListener
$(function() {
    $('button').click(function(e) {
        var lat = $('#txtUsername').val();
        var lng = $('#txtPassword').val();
        $.ajax({
            url: '/signUpUser',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644)
        });

        // We add a DOM event here to show an alert if the DIV containing the
        // map is clicked.
        map.addListener('click', function(e) {
           placeMarkerAndPanTo(e.latLng, map);
         });
       }

       function placeMarkerAndPanTo(latLng, map) {
         var marker = new google.maps.Marker({
           position: latLng,
           map: map
         });
         map.panTo(latLng);
       }
      }

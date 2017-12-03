
var map;
const GOOGLE_API_KEY = 'AIzaSyAHwf_cr7_74eJGebWn_oBQGue1SiSZD6I';
var NEWS_API_KEY = '8e35262201b141f18ab63b79b5c2b7c9'
// var src = 'http://code.google.com/apis/kml/documentation/us_states.kml'
function initMap() {
    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40, lng: -100},
        zoom: 4,
        styles: mapStyle
    });


    var mapStyle = [{
        'featureType': 'all',
        'elementType': 'all',
        'stylers': [{'visibility': 'off'}]
    }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
    }, {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [{'visibility': 'off'}]
    }, {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
    }];

    map.addListener('click', function(e) {
        get_news(e.latLng);
    });
}

/*
async get that takes in a function as the call back
*/
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

/*
Given a latlng object, finds news articles related to it, returns it in array of json
 */
function get_news(latLng) {
    lat = latLng.lat();
    lng = latLng.lng();
    url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
        + lat.toString() + ',' + lng.toString()
        + '&key=' + GOOGLE_API_KEY;
    httpGetAsync(url, callback);
}

function callback(response){
  obj = JSON.parse(response).results[1].address_components;
  var keywords = "";
  for (i = 0; i < obj.length; i++) {
    keywords = keywords.concat(obj[i].long_name);
    if (i != obj.length-1) {
      keywords = keywords.concat("+");
    }
  }
    url = 'https://newsapi.org/v2/everything\?q=' +
           keywords + "&" + 'apiKey=' + NEWS_API_KEY;
  httpGetAsync(url, finalCallback);
  alert(keywords);
}

function finalCallback(response) {
  alert("FINAL COUNTDOWN!!");
  obj = JSON.parse(response);
  alert(JSON.stringify(obj));
}

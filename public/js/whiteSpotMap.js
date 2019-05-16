var mymap = L.map('mapid').setView([49.281003, -123.085564], 16);
var marker = L.marker([49.281003, -123.085564]).addTo(mymap);
marker.bindPopup("<b>Strathcona Community Policing Centre</b><br>872 E Hastings St, Vancouver, BC V6A 1R6").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJ5Y2UxMjM0NSIsImEiOiJjanZoMmxvejYwZTNsNDhyZ2w2M2NoNG9rIn0.xyyjfXZ4egW9hJGX0lu5Cw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap); 
            
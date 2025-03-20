var map = L.map('map').setView([47.66336, 9.17598], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([47.66336, 9.17598]).addTo(map);
marker.bindPopup("<b>Hallo Konstanz!</b><br>I am a popup.").openPopup();
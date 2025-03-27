/*
Skript für Lieblingsorte

*/
let lat = 47.66336;
let lng = 9.17598;
let zoom = 19;

// Karte initialisieren

let map = L.map('map').setView([47.66336, 9.17598], 14);


// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: zoom,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`<b>Hallo Konstanz!</b><br>I am a popup at ${lat} / ${lng}.
    `).openPopup();
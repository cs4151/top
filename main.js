/*
Skript für Neuseelandreise

*/

// Karte initialisieren

let map = L.map('map').setView([47.66336, 9.17598], 14);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([47.66336, 9.17598]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup("<b>Hallo Konstanz!</b><br>I am a popup.").openPopup();
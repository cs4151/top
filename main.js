/*
Skript für Lieblingsorte

*/
let lat = 47.66336;
let lng = 9.175;
let zoom = 19;

let stop = {

    nr: 9,
    title: "Konstanz",
    user: "cs4151",
    lat: 47.6633,
    lng: 9.175,
    zoom: 19,
};


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

marker.bindPopup(`<h2>Konstanz</h2>
    <ul>
    <li>Geogr. Breite: ${lat.toFixed(5)}°</li>
    <li>Geogr. Länge: ${lng.toFixed(5)}°</li>
    </ul>
    `).openPopup();

    

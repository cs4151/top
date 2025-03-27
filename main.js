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

marker.bindPopup(`<h2>Konstanz</h2>
    <ul>
    <li>Geogr. Breite: ${lat.toFixed(5)}°</li>
    <li>Geogr. Länge: ${lng.toFixed(5)}°</li>
    </ul>
    `).openPopup();

    let course = {

        title: "Webmapping",
        semester: "25S",
        stunden: "3",
        typ: "VU"
    };
    console.log("title", course.title);
    console.log("semester", course.semester);
    console.log("stunden",course.stunden);
    console.log("typ", course.typ);
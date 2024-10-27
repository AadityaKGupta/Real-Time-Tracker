const socket = io();  // Initialize the Socket.io client

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            // Send location to the server
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,  // Use high accuracy
            timeout: 5000,  // Timeout after 5 seconds
            maximumAge: 0,  // Don't cache positions
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Initialize the Leaflet map with default coordinates
const map = L.map("map").setView([0, 0], 16);

// Use HTTPS for the tile layer to avoid mixed content issues
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "OpenStreetMap"
}).addTo(map);

// Object to store user markers
const markers = {};

// When a location is received from the server
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    // Update the map view to focus on the current location
    map.setView([latitude, longitude]);

    if (markers[id]) {
        // If the marker already exists, update its position
        markers[id].setLatLng([latitude, longitude]);
    } else {
        // Create a new marker for a new user
        markers[id] = L.marker([latitude, longitude]).addTo(map);

    }
});

// When a user disconnects
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        // Remove the marker of the disconnected user
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

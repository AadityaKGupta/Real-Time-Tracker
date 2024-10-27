const express = require('express');
const app = express();
const path = require('path');
const http = require("http");
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

// Set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Socket.io connection
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Listen for location data
    socket.on("send-location", (data) => {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Route for main page
app.get("/", (req, res) => {
    res.render("index");
});

// Start server
server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000');
});

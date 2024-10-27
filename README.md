# Real-Time Tracker

A real-time tracker application built with Node.js, Express, Socket.io, and Leaflet. This application allows users to share their geolocation in real-time and displays the locations of all connected users on a map.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Program Details](#program-details)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Real-time location tracking of multiple users.
- Interactive map display using Leaflet.
- Automatic updates when users' locations change.
- User disconnection handling.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for Node.js.
- **Socket.io**: Library for real-time web applications.
- **EJS**: Template engine for rendering HTML.
- **Leaflet**: JavaScript library for interactive maps.
- **HTML5**: For structuring the web application.
- **CSS**: For styling the application.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AadityaKGupta/Real-Time-Tracker.git

2. **Navigate to the project directory**:
   ```bash
   cd Real-Time-Tracker

3. **Install dependencies**:
   ```bash
   npm install
   

## Usage

1. **Start the server**:
   ```bash
   node app.js

2. **Open your browser** and go to [http://localhost:3000](http://localhost:3000).

3. **Allow location access** when prompted to share your geolocation.

4. **Open the application in multiple tabs or devices** to see real-time location updates.

## How It Works

- **Geolocation**: The application uses the Geolocation API to retrieve the user's current location.
- **Socket.io**: When a user connects, their location is sent to the server via Socket.io. The server broadcasts this location to all connected clients.
- **Leaflet Map**: The user locations are displayed on a Leaflet map. Markers represent each user's location, and they are updated in real-time as users move or disconnect.

### Example Code Snippet

Here’s a simplified example of the client-side JavaScript used for geolocation:

```javascript
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error("Error getting location: ", error);
        }
    );
}
```

## Program Details

- **Project Name**: Real-Time Tracker
- **Version**: 1.0.0
- **Author**: Aaditya Gupta
- **Repository**: [Real-Time Tracker Repository](https://github.com/AadityaKGupta/Real-Time-Tracker)
- **License**: MIT

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Name**: Aaditya Gupta
- **Email**: [k.aaditya.g@gmail.com](mailto:aadityagupta@example.com)
- **GitHub**: [AadityaKGupta](https://github.com/AadityaKGupta)


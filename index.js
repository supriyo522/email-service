// require('dotenv').config();
// const express = require('express');
// const notificationRoutes = require('./routes/notificationRoutes');

// // Initialize the Express application
// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());

// // Routes
// app.use('/api/notifications', notificationRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// server.js
const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');

// Middleware
app.use(express.json());

// Use the notification routes
app.use('/api/notifications', notificationRoutes);

// Error handling
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

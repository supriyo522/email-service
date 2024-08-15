// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Define the POST route to send the notification
router.post('/send', notificationController.sendNotification);

module.exports = router;




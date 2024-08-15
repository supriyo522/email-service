// controllers/notificationController.js
const emailRetryService = require('../services/emailRetryService');

exports.sendNotification = async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        await emailRetryService.sendEmail({ to, subject, text });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
};

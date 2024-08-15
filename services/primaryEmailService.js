// services/primaryEmailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();


// Configure Ethereal for primary email service
const primaryTransporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.ETHEREAL_PRIMARY_USER,
        pass: process.env.ETHEREAL_PRIMARY_PASS,
    }
});

const sendPrimaryEmail = async (mailOptions) => {
    try {
        let info = await primaryTransporter.sendMail(mailOptions);
        console.log('Primary Email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error in primary email service: ', error);
        throw error;
    }
};

module.exports = sendPrimaryEmail;




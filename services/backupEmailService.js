// services/backupEmailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();


// Configure Ethereal for backup email service
const backupTransporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.ETHEREAL_BACKUP_USER,
        pass: process.env.ETHEREAL_BACKUP_PASS,
    }
});

const sendBackupEmail = async (mailOptions) => {
    try {
        let info = await backupTransporter.sendMail(mailOptions);
        console.log('Backup Email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error in backup email service: ', error);
        throw error;
    }
};

module.exports = sendBackupEmail;



// services/emailRetryService.js
const sendPrimaryEmail = require('./primaryEmailService');
const sendBackupEmail = require('./backupEmailService');

const sendEmailWithRetry = async (mailOptions) => {
    let attempt = 0;
    const maxRetries = 3;

    while (attempt < maxRetries) {
        try {
            return await sendPrimaryEmail(mailOptions); // Try primary email service
        } catch (error) {
            console.error(`Primary email attempt ${attempt + 1} failed`);
            attempt++;
        }
    }

    console.log('Switching to backup email service...');
    return await sendBackupEmail(mailOptions); // Switch to backup after retries
};

module.exports = {
    sendEmail: sendEmailWithRetry, // Export correctly
};




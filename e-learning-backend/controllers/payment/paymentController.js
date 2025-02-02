// PaymentController.js
const PaymentDAO = require('../../DAOs/payment/paymentDAO');
const EmailService = require('../../Email/emailService');
const crypto = require('crypto');


/*
 Controller Aim To initiate The Payment Process and Send Email with OTP
 to confirm the payment process and verify the payment
*/

class PaymentController {
    constructor() {
        this.paymentDAO = new PaymentDAO();
        this.emailService = new EmailService();
        this.initiatePayment = this.initiatePayment.bind(this);
        this.verifyPayment = this.verifyPayment.bind(this);
    }

    async initiatePayment(req, res) {
        const { userId, email, billDetails } = req.body;
        const otp = crypto.randomInt(100000, 999999).toString();
        this.paymentDAO.savePayment(userId, otp, billDetails);

        const subject = 'EduGuide Premium Course Payment';
        const text = `Your bill: ${billDetails}. OTP: ${otp}`;
        const html = `
            <h4>Your bill Details:</h4><p> ${billDetails}</p>
            <p>OTP To Confirm Payment: <strong>${otp}</strong></p>
        `;

        try {
            await this.emailService.sendEmail(email, subject, text, html);
            res.status(200).json({ message: 'Payment initiated, check your email for OTP.' });
        } catch (error) {
            res.status(500).json({ message: 'Error initiating payment', error });
        }
    }

    verifyPayment(req, res) {
        const { userId, otp } = req.body;
        const isVerified = this.paymentDAO.verifyOTP(userId, otp);

        if (isVerified) {
            res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ message: 'Invalid OTP or payment not found' });
        }
    }
}

module.exports = PaymentController;

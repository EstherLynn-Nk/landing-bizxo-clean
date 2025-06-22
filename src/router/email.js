import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const router = express.Router();
 router.use(cors());

console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  // Verify transporter connection (optional)
  transporter.verify(function (error, success) {
    if (error) {
      console.error("SMTP server connection error:", error);
    } else {
      console.log("SMTP server is ready to send emails");
    }
  });
  
  
  // POST route for sending email
  router.post('/email', async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    //email sendin endpoint
    const mailOptions = {
      from: email, 
      to: process.env.ADMIN_EMAIL, 
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`, // HTML body
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.', error: error.message });
    }
  });
export default router;

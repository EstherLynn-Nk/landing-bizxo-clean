import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import Joi from 'joi'; // Import Joi
import sanitizeHtml from 'sanitize-html'; // Import sanitize-html
import bodyParser from 'body-parser';
import cors from 'cors';
import emailRoutes from './src/router/email.js';


const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors({
  //origin endpoint of the frontend page e.g: https://exemple.domaine
  origin: 'https://5173-idx-landing-bizxo-cleangit-1745950747303.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev',
  methods: ['GET', 'POST'],
  credentials: true, //support for cookies and authantication if needed
  allowedHeaders: ['Content-Type'],
})); // Allow cross-origin requests
console.log('Config object:', { allowedHeaders: ['Content-Type'] });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Joi schema for email data
const emailSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required()
});

// Basic sanitization function (using sanitize-html)
function sanitize(input) {
  return sanitizeHtml(input, {
    allowedTags: [], // Remove all HTML tags
    allowedAttributes: {}, // Remove all attributes
  });
}

// Email sending route handler (modified to include validation and sanitization)
app.post('/api/send-email', async (req, res) => {
  try {
    // Validate the request body against the schema
    const { error, value } = emailSchema.validate(req.body);

    if (error) {
      // If validation fails, return a 400 Bad Request error
      return res.status(400).json({ message: error.details[0].message });
    }

    // Sanitize the input
    const sanitizedData = {
      name: sanitize(value.name),
      email: value.email, // Email format is validated, no need to sanitize HTML
      message: sanitize(value.message)
    };

    // Use environment variables for email configuration
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Replace with your recipient email
      subject: `New message from ${sanitizedData.name}`,
      text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nMessage: ${sanitizedData.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email.' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully!' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
});


//Routes
app.use('/api', emailRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
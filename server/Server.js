const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Endpoint to send email
app.post('/send-report', async (req, res) => {
  const { toEmail, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,  // Your Gmail address
        pass: process.env.EMAIL_PASSWORD,  // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: toEmail,
      subject: subject || 'Emergency Report',
      text: message || 'This is a sample report message.',
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

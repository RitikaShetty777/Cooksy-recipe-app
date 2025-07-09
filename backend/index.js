const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "cooksy_secret_key"; // use env var in production

// Sample users (Replace with DB later)
const users = [
  {
    id: "1",
    email: "admin@cooksy.com",
    password: "cooksy123"
  },
  {
    id: "2",
    email: "test@cooksy.com",
    password: "test123"
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('✅ Cooksy Backend is working!');
});

// ✉️ Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shettyritika636@gmail.com',
        pass: 'lgtc eljq njsg jlen' // your 16-char Gmail app password
      }
    });

    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: 'shettyritika636@gmail.com', // receiver
      subject: 'New Contact Form Message - Cooksy',
      text: message,
      html: `<p><strong>From:</strong> ${user_name} (${user_email})</p>
             <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// 🔐 Login Route
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid Credentials" });
  }

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1d" });

  res.json({
    success: true,
    token,
    userID: user.id
  });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Cooksy Backend running at http://localhost:${PORT}`);
});

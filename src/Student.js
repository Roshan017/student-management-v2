// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./Routes/studentRoutes');
const authRoutes = require('./Routes/authRoutes');
const adminRoutes = require('./Routes/adminRoutes'); // Add this line

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/TGH");

// Routes
app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
app.use('/admin', adminRoutes); // Add this line

app.get('/', (req, res) => {
    res.send('Welcome to Student Management Page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

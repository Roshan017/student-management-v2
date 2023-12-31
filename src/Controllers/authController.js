const Student = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await Student.findOne({ email });

      // Check if the user exists
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate and send the token
      const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  register: async (req, res) => {
    const { name, email, department, password } = req.body;

    try {
      // Check if the email is already registered
      const existingUser = await Student.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new Student({
        name,
        email,
        department,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = authController;

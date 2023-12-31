const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminContoller');
const authMiddleware = require('../middlewares/authMiddleware');

// Middleware to check if the user is an admin
router.use(authMiddleware);

// Routes for admin functionality
router.post('/addStudent', adminController.addStudent);
router.post('/assignTask', adminController.assignTask);

module.exports = router;

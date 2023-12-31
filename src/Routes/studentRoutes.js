const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const taskController = require('../Controllers/taskController');

// Middleware to check authentication
router.use(authMiddleware);

// Route to get tasks for the logged-in student
router.get('/tasks', taskController.getTasks);

// Route to update the status of a task
router.post('/updateTaskStatus', taskController.updateTaskStatus);

module.exports = router;

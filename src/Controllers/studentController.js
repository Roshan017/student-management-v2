const Student = require('../models/Admin');
const Task = require('../models/Task');

// Controller for student functionality
const studentController = {
  getTasks: async (req, res) => {
    try {
      // Retrieve tasks for the logged-in student
      const tasks = await Task.find({ assignedTo: req.user.id });
      res.json({ tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  completeTask: async (req, res) => {
    try {
      // Update task status to completed
      await Task.findByIdAndUpdate(req.params.taskId, { status: 'completed' });
      res.json({ message: 'Task completed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = studentController;

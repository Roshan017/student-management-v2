const Task = require('../models/Task');

const taskController = {
  getTasks: async (req, res) => {
    try {
      // Fetch tasks for the logged-in student
      const tasks = await Task.find({ assignedTo: req.userId });

      res.json({ tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateTaskStatus: async (req, res) => {
    const { taskId, status } = req.body;

    try {
      // Find the task by ID
      const task = await Task.findById(taskId);

      // Check if the task exists
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      // Update the task status
      task.status = status;
      await task.save();

      res.json({ message: 'Task status updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = taskController;

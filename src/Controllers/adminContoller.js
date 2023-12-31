const Student = require('../models/Admin');
const Task = require('../models/Task');

// Controller for admin functionality
const adminController = {
  addStudent: async (req, res) => {
    try {
      // Add a new student
      const newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        password: req.body.password,
      });
      await newStudent.save();
      res.json({ message: 'Student added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  assignTask: async (req, res) => {
    try {
      // Assign a task to a student
      const newTask = new Task({
        description: req.body.description,
        dueTime: req.body.dueTime,
        assignedTo: req.body.studentId,
      });
      await newTask.save();
      res.json({ message: 'Task assigned successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = adminController;

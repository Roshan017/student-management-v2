const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'overdue'],
    default: 'pending',
  },
  assignedTo: {
    type: String,
    ref: 'Student', // Assuming you have a Student model
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

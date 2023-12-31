const mongoose = require('mongoose')

const AdminSchem = new mongoose.Schema(
    {
        Email : {
            type : String,
            required: true
        },

        Password:{
            type: String,
            required: true
        }

    }
)
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;

module.exports = mongoose.model('Admin',AdminSchem);
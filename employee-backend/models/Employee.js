const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  profile: String,
  firstName: String,
  middleName: String,
  lastName: String,
  id: String,
  email: String,
  phone: String,
  designation: String,
  department: String,
  dob: String,
  doj: String,
  dol: String,
  presentAddress: String,
  permanentAddress: String,
  aadhar: String,
  pan: String,
  bankName: String,
  accNo: String,
  ifsc: String,
  branch: String,
  gender: String,
  lastEducation: String,
  password: String
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);

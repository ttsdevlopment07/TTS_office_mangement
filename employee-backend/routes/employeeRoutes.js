const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Add new employee
router.post('/', async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.status(201).json(newEmp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Employee login route
router.post('/login', async (req, res) => {
  const { name, id, password } = req.body;

  try {
    const employee = await Employee.findOne({ id });

    if (!employee || employee.password !== password) {
      return res.status(401).json({ error: 'Invalid ID or password' });
    }

    const dbFullName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`.trim().replace(/\s+/g, ' ').toLowerCase();
    const inputFullName = name.trim().replace(/\s+/g, ' ').toLowerCase();

    if (dbFullName !== inputFullName) {
      return res.status(401).json({ error: 'Name does not match records' });
    }

    res.status(200).json({
      message: 'Login successful',
      employee: {
        id: employee.id,
        name: dbFullName,
        email: employee.email,
        designation: employee.designation,
        department: employee.department
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

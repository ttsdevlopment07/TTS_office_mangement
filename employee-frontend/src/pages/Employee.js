import React, { useState } from 'react';
import axios from '../api'; // axios baseURL is already set in src/api.js
import { useEmployeeContext } from '../context/EmployeeContext';
import '../styles/Employee.css';

function Employee() {
  const { employees } = useEmployeeContext();
  const [showPunch, setShowPunch] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handlePunch = async () => {
    if (!employeeName || !employeeId || !password) {
      setLoginError('Please enter all fields.');
      return;
    }

    try {
      const res = await axios.post('/login', {
        name: employeeName,
        id: employeeId,
        password
      });

      console.log('Login Success:', res.data);
      setShowPunch(true);
      setLoginError('');
    } catch (error) {
      if (error.response?.status === 401) {
        setLoginError(error.response.data.error || 'Invalid credentials');
      } else {
        setLoginError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="page">
      <div className="full-header">EMPLOYEE</div>
      <div className="tabs">
        <button>
          <span className="tab-title">EMPLOYEE</span>
          <span className="tab-count">{employees.length}</span>
        </button>
        <button>
          <span className="tab-title">SALES (Turnover)</span>
          <span className="tab-count">₹1.2M</span>
        </button>
        <button>
          <span className="tab-title">SERVICE (Turnover)</span>
          <span className="tab-count">₹750K</span>
        </button>
        <button>
          <span className="tab-title">PROJECTS (Turnover)</span>
          <span className="tab-count">18</span>
        </button>
        <button>
          <span className="tab-title">CUSTOMERS</span>
          <span className="tab-count">120</span>
        </button>
      </div>

      {!showPunch ? (
        <div id="employeeContent">
          <div className="form-section">
            <div className="form-row">
              <label>Employee:</label>
              <input
                type="text"
                value={employeeName}
                onChange={e => setEmployeeName(e.target.value)}
                placeholder="Enter full name"
              />
              <label>Employee ID:</label>
              <input
                type="text"
                value={employeeId}
                onChange={e => setEmployeeId(e.target.value)}
                placeholder="Enter your ID"
              />
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            {loginError && (
              <div style={{ color: 'red', marginTop: 8 }}>{loginError}</div>
            )}
          </div>
          <div className="button-grid">
            <button className="btn-punch" onClick={handlePunch}>PUNCH</button>
            <button className="btn-report">REPORT</button>
            <button className="btn-task">TASK</button>
            <button className="btn-mail">MAIL</button>
          </div>
        </div>
      ) : (
        <div className="punch-options">
          <h3>Select Punch Option</h3>
          <div className="punch-options-grid">
            <button className="btn-back" onClick={() => setShowPunch(false)}>BACK</button>
            <button className="btn-leave">LEAVE</button>
            <button className="btn-dayin">DAY-IN</button>
            <button className="btn-dayout">DAY-OUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employee;

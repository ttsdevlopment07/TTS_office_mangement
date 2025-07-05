import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployeeContext, EmployeeProvider } from '../context/EmployeeContext';
import '../styles/Admin.css';


function Admin() {
  const { employees } = useEmployeeContext();
  const [showModal, setShowModal] = useState(false);
  const [empId, setEmpId] = useState('');
  const [empPass, setEmpPass] = useState('');
  const navigate = useNavigate();

  const validateLogin = () => {
    if (empId.trim() === 'HR123' && empPass.trim() === 'adminpass') {
      navigate('/pim');
    } else {
      alert('Invalid Employee ID or Password');
    }
  };
  return (
    <>
      <div className="full-header">ADMIN</div>

      {/* Tabs */}
      <div className="tabs">
        <button><span className="tab-title">EMPLOYEE</span><span className="tab-count">{employees.length}</span></button>
        <button><span className="tab-title">SALES (Turnover)</span><span className="tab-count">₹1.2M</span></button>
        <button><span className="tab-title">SERVICE (Turnover)</span><span className="tab-count">₹750K</span></button>
        <button><span className="tab-title">PROJECTS (Turnover)</span><span className="tab-count">18</span></button>
        <button><span className="tab-title">CUSTOMERS</span><span className="tab-count">120</span></button>
      </div>

      {/* Cards */}
      <div className="admin-cards">
        <div className="admin-card">ADMIN MANAGEMENT</div>
        <div className="admin-card" onClick={() => setShowModal(true)}>HR SUPERVISOR</div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>HR Supervisor Login</h3>
            <input
              type="text"
              placeholder="Employee ID"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={empPass}
              onChange={(e) => setEmpPass(e.target.value)}
            />
            <button onClick={validateLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <EmployeeProvider>
      <Admin />
      {/* ...your other routes/components... */}
    </EmployeeProvider>
  );
}

export default App;

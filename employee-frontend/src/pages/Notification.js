import React from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import '../styles/App.css';

function Notification() {
  const { employees } = useEmployeeContext();
  return (
    <div className="page">
      <div className="full-header">NOTIFICATIONS</div>
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
    </div>
  );
}

export default Notification;
import React from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import '../styles/Turnover.css';

function Turnover() {
  const { employees } = useEmployeeContext();
  return (
    <div className="page">
      <div className="full-header">TURNOVER</div>
      <div className="tabs" style={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', overflowX: 'auto' }}>
        <button className="tab-employee">
          <span className="tab-title">EMPLOYEE</span>
          <span className="tab-count">{employees.length}</span>
        </button>
        <button className="tab-sales">
          <span className="tab-title">SALES (Turnover)</span>
          <span className="tab-count">₹1.2M</span>
        </button>
        <button className="tab-services">
          <span className="tab-title">SERVICES (Turnover)</span>
          <span className="tab-count">₹750K</span>
        </button>
        <button className="tab-projects">
          <span className="tab-title">PROJECTS (Turnover)</span>
          <span className="tab-count">18</span>
        </button>
        <button className="tab-customers">
          <span className="tab-title">CUSTOMERS</span>
          <span className="tab-count">120</span>
        </button>
      </div>
      {/* Centered extra tab group */}
      <div className="center-tabs" style={{ display: 'flex', justifyContent: 'center', margin: '24px 0', gap: '16px' }}>
        <button className="center-tab tab-sales">
          <span className="tab-title">SALES</span>
        </button>
        <button className="center-tab tab-services">
          <span className="tab-title">SERVICES</span>
        </button>
        <button className="center-tab tab-projects">
          <span className="tab-title">PROJECTS</span>
        </button>
      </div>
    </div>
  );
}

export default Turnover;
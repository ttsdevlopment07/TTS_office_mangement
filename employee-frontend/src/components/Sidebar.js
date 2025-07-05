import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/logo.png" alt="Employee Task Management" />

      <Link to="/">🏠 DashBoard</Link>
      <Link to="/admin">👨‍💼 Admin</Link>
      <Link to="/employee">👥 Employee</Link>
      <Link to="/notification">🔔 Notification</Link>
      <Link to="/turnover">📊 Turnover</Link>
    </div>
  );
}

export default Sidebar;

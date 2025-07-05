import React, { useState } from 'react';
import '../styles/Pim.css';
import EmployeeTab from '../components/Pim/EmployeeTab';
import TaskTab from '../components/Pim/TaskTab';
import MailTab from '../components/Pim/MailTab';
import NotificationTab from '../components/Pim/NotificationTab';


// Dummy ReportTab component (replace with your actual implementation if needed)
function ReportTab() {
  return (
    <div style={{ padding: 24 }}>
      <h3>Report</h3>
      <p>This is the report tab. Add your report content here.</p>
    </div>
  );
}

function Pim() {
  const [activeTab, setActiveTab] = useState('employee');

  const renderTabButton = (id, label) => (
    <button
      className={activeTab === id ? 'active' : ''}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="full-header">HR SUPERVISOR</div>

      <div className="tabs">
        {renderTabButton('employee', '👥 EMPLOYEE DETAILS')}
        {renderTabButton('task', '📝 TASK')}
        {renderTabButton('mail', '📩 MAIL')}
        {renderTabButton('notification', '🔔 NOTIFICATION')}
        {renderTabButton('report', '📊 REPORT')}
      </div>

      <div className="tab-content-wrapper">
        {activeTab === 'employee' && <EmployeeTab />}
        {activeTab === 'task' && <TaskTab />}
        {activeTab === 'mail' && <MailTab />}
        {activeTab === 'notification' && <NotificationTab />}
        {activeTab === 'report' && <ReportTab />}
      </div>
    </>
  );
}

export default Pim;
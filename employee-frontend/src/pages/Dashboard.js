import React, { useEffect } from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import '../styles/Dashboard.css';

function Dashboard() {
  const { employees } = useEmployeeContext();
  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNotifToggle = document.getElementById('mobileNotifToggle');
    const mobilePanel = document.getElementById('mobileNotifications');

    const toggleSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) sidebar.classList.toggle('open');
    };

    const toggleNotif = () => {
      if (mobilePanel) {
        mobilePanel.style.display =
          mobilePanel.style.display === 'none' ? 'block' : 'none';
      }
    };

    menuToggle?.addEventListener('click', toggleSidebar);
    mobileNotifToggle?.addEventListener('click', toggleNotif);

    return () => {
      menuToggle?.removeEventListener('click', toggleSidebar);
      mobileNotifToggle?.removeEventListener('click', toggleNotif);
    };
  }, []);

  return (
    <>
      <div className="full-header">EMPLOYEE TASK MANAGEMENT</div>

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

      <div className="cards">
        {[
          {
            title: 'Top 5 Ongoing Activities',
            data: [
              ['Desktop', 65],
              ['Speakers', 52],
              ['Headphones', 42],
              ['RGB Keyboard', 37],
              ['Laptop HP xyz i5', 14]
            ]
          },
          {
            title: 'Top 5 Performer of this FY',
            data: [
              ['John Doe', 95],
              ['Jane Smith', 88],
              ['Ali Khan', 80],
              ['Divya P', 72],
              ['Ravi S', 66]
            ]
          },
          {
            title: 'Top 5 Products of this FY',
            data: [
              ['Monitor', 90],
              ['Keyboard', 70],
              ['Mouse', 60],
              ['Webcam', 40],
              ['Printer', 20]
            ]
          },
          {
            title: 'Top 5 Selling Products',
            data: [
              ['Mouse', 85],
              ['Monitor', 80],
              ['Webcam', 55],
              ['Keyboard', 50],
              ['Printer', 35]
            ]
          }
        ].map((card, idx) => (
          <div className="card" key={idx}>
            <h3>{card.title}</h3>
            <div className="bar-container">
              {card.data.map(([label, value], i) => (
                <div key={i}>
                  <div className="bar-label">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="bar" style={{ width: `${value}%` }}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Notification Panel (optional for mobile) */}
      <div
        className="mobile-notifications"
        id="mobileNotifications"
        style={{ display: 'none' }}
      >
        <h3>NOTIFICATIONS</h3>
        <div id="mobileNotificationBox">
          <div className="notification">✔ System started successfully</div>
          <div className="notification">📢 Welcome to the notification panel</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

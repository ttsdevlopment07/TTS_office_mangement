
import React, { useEffect, useRef } from 'react';
import { useNotifications } from '../context/NotificationContext';



function NotificationPanel() {
  const { notifications } = useNotifications();
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [notifications]);

  return (
    <div className="notification-panel">
      <h3>NOTIFICATIONS</h3>
      <div className="notification-box" ref={boxRef}>
        {notifications.map((n, i) => (
          <div key={i} className="notification">
            {n.title ? <b>{n.title}: </b> : null}{n.message || n}
            {n.date && <span style={{ float: 'right', color: '#888', fontSize: 11, marginLeft: 8 }}>{n.date}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;

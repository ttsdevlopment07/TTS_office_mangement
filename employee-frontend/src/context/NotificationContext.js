import React, { createContext, useContext, useState } from 'react';

// Create the context
const NotificationContext = createContext();

// Provider component
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome', message: 'Welcome to the company!', date: '2025-07-01' },
    { id: 2, title: 'Holiday', message: 'Office closed on July 10th.', date: '2025-07-03' },
  ]);

  // Add notification
  const addNotification = (title, message) => {
    setNotifications(prev => [
      { id: Date.now(), title, message, date: new Date().toLocaleDateString() },
      ...prev,
    ]);
  };

  // Update notification
  const updateNotification = (id, title, message) => {
    setNotifications(prev => prev.map(n =>
      n.id === id ? { ...n, title, message } : n
    ));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, updateNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Custom hook for easy usage
export function useNotifications() {
  return useContext(NotificationContext);
}

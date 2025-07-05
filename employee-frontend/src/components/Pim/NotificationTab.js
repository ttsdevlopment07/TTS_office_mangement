


import React, { useState } from 'react';
import { useNotifications } from '../../context/NotificationContext';


function NotificationTab() {
  const { notifications, addNotification, updateNotification } = useNotifications();
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    if (!form.title || !form.message) {
      setError('Please fill all fields.');
      return;
    }
    addNotification(form.title, form.message);
    setForm({ title: '', message: '' });
    setError('');
  };

  const handleEdit = (notif) => {
    setEditingId(notif.id);
    setForm({ title: notif.title, message: notif.message });
    setError('');
  };

  const handleUpdate = e => {
    e.preventDefault();
    if (!form.title || !form.message) {
      setError('Please fill all fields.');
      return;
    }
    updateNotification(editingId, form.title, form.message);
    setEditingId(null);
    setForm({ title: '', message: '' });
    setError('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ title: '', message: '' });
    setError('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 32, borderRadius: 16, boxShadow: '0 8px 32px rgba(33,150,243,0.15)', background: 'linear-gradient(135deg, #f3e5f5 0%, #e3f2fd 100%)' }}>
      <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24, fontWeight: 700 }}>Manage Notifications</h2>
      <form onSubmit={editingId ? handleUpdate : handleAdd} style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #e3f2fd', marginBottom: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, color: '#1976d2' }}>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, fontSize: 16 }}
            placeholder="Notification title"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, color: '#1976d2' }}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, fontSize: 16, minHeight: 60 }}
            placeholder="Notification message"
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" style={{ padding: '10px 28px', background: 'linear-gradient(90deg,#1976d2,#64b5f6)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 16, boxShadow: '0 2px 8px #90caf9', cursor: 'pointer' }}>
            {editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} style={{ padding: '10px 28px', background: '#fff', color: '#1976d2', border: '2px solid #1976d2', borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Cancel</button>
          )}
        </div>
      </form>
      <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #e3f2fd' }}>
        <h4 style={{ color: '#1976d2', fontWeight: 700, marginBottom: 16 }}>All Notifications</h4>
        {notifications.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>No notifications yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {notifications.map(n => (
              <li key={n.id} style={{ marginBottom: 18, padding: 16, borderRadius: 8, background: '#e3f2fd', boxShadow: '0 1px 4px #90caf9', position: 'relative' }}>
                <div style={{ fontWeight: 600, fontSize: 18, color: '#512da8' }}>{n.title}</div>
                <div style={{ color: '#333', margin: '6px 0 4px 0' }}>{n.message}</div>
                <div style={{ fontSize: 13, color: '#1976d2' }}>Date: {n.date}</div>
                <button onClick={() => handleEdit(n)} style={{ position: 'absolute', top: 12, right: 12, background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 6, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NotificationTab;
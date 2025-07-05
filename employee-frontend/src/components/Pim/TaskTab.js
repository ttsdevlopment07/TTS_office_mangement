import React, { useState } from 'react';


function TaskTab() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !employeeId || !description) {
      setSuccess('Please fill all required fields.');
      return;
    }
    setTasks([
      ...tasks,
      {
        employeeName,
        employeeId,
        fileName: file ? file.name : '',
        description,
        date: new Date().toLocaleString(),
      },
    ]);
    setSuccess('Task assigned successfully!');
    setEmployeeName('');
    setEmployeeId('');
    setFile(null);
    setDescription('');
  };

  return (
    <div className="task-tab-form fancy-bg" style={{ maxWidth: 700, margin: '40px auto', padding: 32, borderRadius: 16, boxShadow: '0 8px 32px rgba(33,150,243,0.15)', background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)' }}>
      <h2 style={{ textAlign: 'center', color: '#1976d2', letterSpacing: 2, marginBottom: 32, fontWeight: 700, textShadow: '0 2px 8px #90caf9' }}>Assign Task</h2>
      {showForm && (
        <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #e3f2fd', marginBottom: 24 }}>
          <div style={{ display: 'flex', gap: 24, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 600, color: '#1976d2' }}>Employee Name</label>
              <input
                type="text"
                value={employeeName}
                onChange={e => setEmployeeName(e.target.value)}
                required
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, fontSize: 16 }}
                placeholder="Enter employee name"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 600, color: '#1976d2' }}>Employee ID</label>
              <input
                type="text"
                value={employeeId}
                onChange={e => setEmployeeId(e.target.value)}
                required
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, fontSize: 16 }}
                placeholder="Enter employee ID"
              />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 600, color: '#1976d2' }}>Upload File</label>
            <input
              type="file"
              onChange={e => setFile(e.target.files[0])}
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, background: '#f5faff' }}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 600, color: '#1976d2' }}>Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #90caf9', marginTop: 4, fontSize: 16, minHeight: 80, background: '#f5faff' }}
              placeholder="Describe the task..."
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            <button type="submit" style={{ padding: '12px 32px', background: 'linear-gradient(90deg,#1976d2,#64b5f6)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #90caf9', cursor: 'pointer', transition: '0.2s' }}>
              Assign Task
            </button>
            <button type="button" onClick={() => setShowForm(false)} style={{ padding: '12px 32px', background: '#fff', color: '#1976d2', border: '2px solid #1976d2', borderRadius: 8, fontWeight: 700, fontSize: 18, marginLeft: 8, cursor: 'pointer', transition: '0.2s' }}>
              View Tasks
            </button>
          </div>
          {success && <div style={{ marginTop: 16, color: success.includes('successfully') ? 'green' : 'red', textAlign: 'center', fontWeight: 600 }}>{success}</div>}
        </form>
      )}
      {/* Task Chart */}
      {!showForm && (
        <div style={{ marginTop: 16, background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #e3f2fd' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h4 style={{ color: '#1976d2', fontWeight: 700, margin: 0 }}>Assigned Tasks</h4>
            <button onClick={() => setShowForm(true)} style={{ padding: '8px 24px', background: 'linear-gradient(90deg,#1976d2,#64b5f6)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, boxShadow: '0 2px 8px #90caf9', cursor: 'pointer' }}>Assign New Task</button>
          </div>
          {tasks.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f5faff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px #90caf9' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg,#1976d2,#64b5f6)', color: '#fff' }}>
                    <th style={{ border: 'none', padding: 12 }}>Employee Name</th>
                    <th style={{ border: 'none', padding: 12 }}>Employee ID</th>
                    <th style={{ border: 'none', padding: 12 }}>File</th>
                    <th style={{ border: 'none', padding: 12 }}>Description</th>
                    <th style={{ border: 'none', padding: 12 }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#e3f2fd' : '#fff' }}>
                      <td style={{ padding: 10, fontWeight: 500 }}>{task.employeeName}</td>
                      <td style={{ padding: 10 }}>{task.employeeId}</td>
                      <td style={{ padding: 10 }}>{task.fileName}</td>
                      <td style={{ padding: 10 }}>{task.description}</td>
                      <td style={{ padding: 10, color: '#1976d2', fontWeight: 500 }}>{task.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#888', fontSize: 18, marginTop: 32 }}>No tasks assigned yet.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskTab;
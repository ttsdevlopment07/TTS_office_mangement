import React, { useState } from 'react';

function MailTab() {
  const [authenticated, setAuthenticated] = useState(false);
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showCompose, setShowCompose] = useState(false);

  // Placeholder for Gmail OAuth2
  const handleConnect = () => {
    // TODO: Trigger OAuth2 flow to connect Gmail
    setAuthenticated(true);
    // After connecting, fetch emails
    fetchInbox();
  };

  // Placeholder for fetching inbox
  const fetchInbox = () => {
    // TODO: Replace with API call to backend which fetches Gmail inbox
    setEmails([
      { id: 1, from: "boss@gmail.com", subject: "Welcome!", snippet: "Congrats on joining...", date: "2025-07-04", unread: true },
      // Add more mock emails
    ]);
  };

  const handleSend = (to, subject, body) => {
    // TODO: Send email via backend using Gmail API
    alert(`Sent mail to ${to} with subject "${subject}"`);
    setShowCompose(false);
  };

  if (!authenticated) {
    return (
      <div>
        <h2>Mail Tab (Gmail)</h2>
        <button onClick={handleConnect}>Connect Gmail Account</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "80vh" }}>
      {/* Sidebar: Inbox List */}
      <div style={{ width: 300, borderRight: "1px solid #ccc", overflowY: "auto" }}>
        <button onClick={() => setShowCompose(true)} style={{ margin: 8, width: "90%" }}>Compose</button>
        <h3 style={{ marginLeft: 8 }}>Inbox</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {emails.map(email => (
            <li key={email.id}
                style={{
                  background: email.unread ? "#eef" : "#fff",
                  padding: 8,
                  cursor: "pointer"
                }}
                onClick={() => setSelectedEmail(email)}>
              <b>{email.subject}</b> <br/>
              <small>From: {email.from}</small><br/>
              <small>{email.snippet}</small>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content: Email Viewer or Compose */}
      <div style={{ flex: 1, padding: 16 }}>
        {showCompose ? (
          <ComposeMail onSend={handleSend} onClose={() => setShowCompose(false)} />
        ) : selectedEmail ? (
          <EmailViewer email={selectedEmail} onReply={() => setShowCompose(true)} />
        ) : (
          <div>Select an email to view</div>
        )}
      </div>
    </div>
  );
}

// Compose Mail Component
function ComposeMail({ onSend, onClose }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <h3>Compose Email</h3>
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} style={{ width: "100%", marginBottom: 8 }} />
      <input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} style={{ width: "100%", marginBottom: 8 }} />
      <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} style={{ width: "100%", height: 100, marginBottom: 8 }} />
      <div>
        <button onClick={() => onSend(to, subject, body)}>Send</button>
        <button onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
      </div>
    </div>
  );
}

// Email Viewer Component
function EmailViewer({ email, onReply }) {
  return (
    <div>
      <h3>{email.subject}</h3>
      <p><b>From:</b> {email.from}</p>
      <p><b>Date:</b> {email.date}</p>
      <hr />
      <div>{email.snippet} ... (full email body here)</div>
      <button onClick={onReply} style={{ marginTop: 16 }}>Reply</button>
    </div>
  );
}

export default MailTab;
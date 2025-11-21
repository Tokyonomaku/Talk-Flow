// Minimal test app to verify React is working
import React from 'react';

export default function TestApp() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>✅ TalkFlow is Loading!</h1>
      <p style={{ fontSize: '18px', opacity: 0.9 }}>
        If you see this, React is working. Loading full app...
      </p>
    </div>
  );
}


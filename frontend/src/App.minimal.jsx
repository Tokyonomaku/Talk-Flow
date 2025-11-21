// Minimal test app - if this works, we know React is mounting
import React from 'react';

export default function MinimalApp() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>✅ React is Working!</h1>
      <p>If you see this, React mounted successfully.</p>
      <p>Now checking full app...</p>
    </div>
  );
}


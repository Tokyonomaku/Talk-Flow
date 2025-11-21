// Absolute fallback - this WILL render
import React from 'react';

export default function FallbackApp() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>✅ TalkFlow</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        React is working! The app is loading...
      </p>
      <div style={{ padding: '20px', background: '#1f2937', borderRadius: '8px' }}>
        <p>If you see this message, React mounted successfully.</p>
        <p>If the full app doesn't load, check the browser console for errors.</p>
      </div>
    </div>
  );
}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleTalkFlowUI from "./SimpleTalkFlowUI";
import Pricing from "./pages/Pricing";
import Activate from "./pages/Activate";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  console.log('App component rendering...');
  
  try {
    return (
      <ErrorBoundary>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<SimpleTalkFlowUI />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/activate" element={<Activate />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('App render error:', error);
    return (
      <div style={{ padding: '40px', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
        <h1>App Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
}

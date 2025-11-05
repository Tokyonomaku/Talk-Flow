import React, { useState, useEffect } from 'react';
import { getHistory, clearHistory as clearHistoryStorage } from '../utils/historyStorage';

/**
 * History Component
 * Displays user action history from localStorage
 */
const History = () => {
  const [history, setHistory] = useState([]);

  // Load history from localStorage on mount and when cleared
  const loadHistory = () => {
    const storedHistory = getHistory();
    setHistory(storedHistory);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  /**
   * Format timestamp for display
   * @param {string} timestamp - ISO timestamp string
   * @returns {string} - Formatted time string
   */
  const formatTime = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      return 'Unknown time';
    }
  };

  /**
   * Handle clear history button click
   */
  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      const success = clearHistoryStorage();
      if (success) {
        loadHistory(); // Reload to update UI
      }
    }
  };

  if (history.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        <p>No history available.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <h2>History</h2>
        <button
          onClick={handleClearHistory}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Clear History
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {history.map((entry) => (
          <div
            key={entry.id}
            style={{
              padding: '12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <div style={{ color: '#666', marginBottom: '4px', fontSize: '12px' }}>
              [{formatTime(entry.timestamp)}]
            </div>
            <div style={{ fontWeight: '500' }}>
              <span style={{ textTransform: 'capitalize', color: '#007bff' }}>
                {entry.action}
              </span>
              : <span style={{ color: '#333' }}>{entry.input}</span>
              {' → '}
              <span style={{ color: '#28a745' }}>{entry.output}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;


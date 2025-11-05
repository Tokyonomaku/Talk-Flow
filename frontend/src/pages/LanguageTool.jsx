import React, { useState, useEffect } from 'react';
import { processText } from '../lib/api.js';

const LanguageTool = () => {
  const [text, setText] = useState('');
  const [action, setAction] = useState('summarize');
  const [targetLang, setTargetLang] = useState('');
  const [tone, setTone] = useState('default');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('history');
      if (stored) {
        const parsed = JSON.parse(stored);
        setHistory(Array.isArray(parsed) ? parsed : []);
      }
    } catch (err) {
      console.error('Failed to load history:', err);
    }
  }, []);

  // Save history to localStorage (keep only last 10 items)
  const saveToHistory = (item) => {
    try {
      const newHistory = [item, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('history', JSON.stringify(newHistory));
    } catch (err) {
      console.error('Failed to save history:', err);
    }
  };

  // Clear history from localStorage and state
  const clearHistory = () => {
    try {
      localStorage.removeItem('history');
      setHistory([]);
    } catch (err) {
      console.error('Failed to clear history:', err);
    }
  };

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const request = {
        action,
        text: text.trim(),
        ...(action === 'translate' && targetLang && { targetLang }),
        tone,
      };

      const response = await processText(request);
      
      // Check if result contains an error indicator
      if (response.result && response.result.startsWith('[error]')) {
        setError('Could not process your text');
        return;
      }
      
      setResult(response.result);
      
      // Save to history after successful call
      saveToHistory({
        action,
        text: text.trim(),
        result: response.result,
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      setError('Could not process your text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Language Tool</h1>
      
      {error && (
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            padding: '12px 16px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{error}</span>
          <button
            onClick={() => setError('')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#721c24',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '0',
              marginLeft: '10px',
              fontWeight: 'bold'
            }}
            aria-label="Close error"
          >
            ×
          </button>
        </div>
      )}
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to process..."
          style={{ width: '100%', height: '150px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="action">Action:</label>
        <select
          id="action"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="summarize">Summarize</option>
          <option value="rewrite">Rewrite</option>
          <option value="translate">Translate</option>
        </select>
      </div>

      {action === 'translate' && (
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="targetLang">Target Language:</label>
          <input
            id="targetLang"
            type="text"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            placeholder="e.g., es, fr, de"
            style={{ marginLeft: '10px', width: '100px' }}
          />
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="tone">Tone:</label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="default">default</option>
          <option value="friendly">friendly</option>
          <option value="formal">formal</option>
          <option value="simple">simple</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: loading ? '#ccc' : '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Processing...' : 'Generate'}
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <div style={{ marginBottom: '8px' }}>Tone: {tone}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <div 
              data-testid="result"
              style={{ 
                flex: 1,
                padding: '10px', 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #dee2e6', 
                borderRadius: '4px' 
              }}
            >
              {result}
            </div>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(result);
                  alert('Copied!');
                } catch (err) {
                  console.error('Failed to copy:', err);
                  alert('Failed to copy to clipboard');
                }
              }}
              style={{
                padding: '8px 12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                whiteSpace: 'nowrap'
              }}
              title="Copy to clipboard"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #dee2e6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3>Recent Activity</h3>
            <button
              onClick={clearHistory}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear History
            </button>
          </div>
          <div>
            {history.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px'
                }}
              >
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500',
                      textTransform: 'capitalize'
                    }}
                  >
                    {item.action}
                  </span>
                </div>
                <div style={{ marginBottom: '5px' }}>
                  <strong>Text:</strong> {item.text.length > 30 ? `${item.text.substring(0, 30)}...` : item.text}
                </div>
                <div>
                  <strong>Result:</strong> {item.result.length > 30 ? `${item.result.substring(0, 30)}...` : item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageTool;


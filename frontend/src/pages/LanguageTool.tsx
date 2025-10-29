import React, { useState } from 'react';
import { processText, ProcessTextRequest } from '../lib/api';

const LanguageTool: React.FC = () => {
  const [text, setText] = useState('');
  const [action, setAction] = useState<'summarize' | 'rewrite' | 'translate'>('summarize');
  const [targetLang, setTargetLang] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const request: ProcessTextRequest = {
        action,
        text: text.trim(),
        ...(action === 'translate' && targetLang && { targetLang }),
      };

      const response = await processText(request);
      setResult(response.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Language Tool</h1>
      
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
          onChange={(e) => setAction(e.target.value as 'summarize' | 'rewrite' | 'translate')}
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

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <div 
            data-testid="result"
            style={{ 
              padding: '10px', 
              backgroundColor: '#f8f9fa', 
              border: '1px solid #dee2e6', 
              borderRadius: '4px' 
            }}
          >
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageTool;

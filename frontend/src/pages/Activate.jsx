import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Activate() {
  const [licenseKey, setLicenseKey] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // YOUR REAL GUMROAD LICENSE KEYS
  const VALID_KEYS = [
    'PMuKJiIjmAaCLm8d4KwcaA==',  // Monthly $9.99
    'GRFRs0-4DiRMOnKFfQXF8Q=='   // Annual $49
  ];

  // Auto-fill key from URL if present (Gumroad redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyFromURL = params.get('key');
    
    if (keyFromURL) {
      setLicenseKey(keyFromURL);
    }
  }, []);

  const activateKey = () => {
    setLoading(true);
    
    // Normalize the key (trim spaces)
    const cleanKey = licenseKey.trim();
    
    // Track how many times each key is used
    const keyUsageCount = JSON.parse(localStorage.getItem('key_usage') || '{}');
    
    if (keyUsageCount[cleanKey]) {
      keyUsageCount[cleanKey]++;
    } else {
      keyUsageCount[cleanKey] = 1;
    }
    
    localStorage.setItem('key_usage', JSON.stringify(keyUsageCount));
    
    // If a key is used 100+ times, something's wrong
    if (keyUsageCount[cleanKey] > 100) {
      setStatus({
        type: 'error',
        message: '🚨 This key has been flagged for suspicious activity. Please contact support.'
      });
      setLoading(false);
      
      // Log suspicious activity for monitoring
      console.warn('SUSPICIOUS KEY USAGE DETECTED:', {
        key: cleanKey,
        usageCount: keyUsageCount[cleanKey],
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ip: 'client-side' // Note: Real IP would need backend logging
      });
      
      return;
    }
    
    // Check if already redeemed
    const redeemedKeys = JSON.parse(localStorage.getItem('redeemed_keys') || '[]');
    
    if (redeemedKeys.includes(cleanKey)) {
      setStatus({
        type: 'error',
        message: '❌ This license key has already been used!'
      });
      setLoading(false);
      return;
    }
    
    // Validate the key
    if (VALID_KEYS.includes(cleanKey)) {
      // Mark as premium
      localStorage.setItem('talkflow_premium', 'true');
      localStorage.setItem('talkflow_license_key', cleanKey);
      
      // Track redeemed keys (prevent reuse)
      redeemedKeys.push(cleanKey);
      localStorage.setItem('redeemed_keys', JSON.stringify(redeemedKeys));
      
      // Determine which plan (optional - for analytics)
      const planType = cleanKey === 'PMuKJiIjmAaCLm8d4KwcaA==' ? 'monthly' : 'annual';
      localStorage.setItem('talkflow_plan', planType);
      
      // Log successful activation for analytics
      console.log('PREMIUM ACTIVATION SUCCESS:', {
        key: cleanKey,
        planType: planType,
        usageCount: keyUsageCount[cleanKey],
        timestamp: new Date().toISOString()
      });
      
      setStatus({
        type: 'success',
        message: '🎉 Premium activated! All 8 languages and lessons unlocked!'
      });
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setStatus({
        type: 'error',
        message: '❌ Invalid license key. Please check and try again.'
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="activate-page" style={styles.page}>
      <div className="activate-container" style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>🚀 Activate TalkFlow Premium</h1>
          <p style={styles.subtitle}>Enter your license key from Gumroad</p>
        </div>
        
        <div className="input-group" style={styles.inputGroup}>
          <input
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="Paste your license key here"
            style={styles.input}
          />
          <button 
            onClick={activateKey}
            disabled={loading || !licenseKey.trim()}
            style={{
              ...styles.button,
              opacity: (loading || !licenseKey.trim()) ? 0.5 : 1,
              cursor: (loading || !licenseKey.trim()) ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? '⏳ Activating...' : '✨ Activate Premium'}
          </button>
        </div>
        
        {status && (
          <div style={{
            ...styles.statusMessage,
            backgroundColor: status.type === 'success' ? '#10B981' : '#EF4444',
            color: 'white'
          }}>
            {status.message}
          </div>
        )}
        
        <div className="help-section" style={styles.helpSection}>
          <div style={styles.helpBox}>
            <p style={styles.helpTitle}>💡 Where's my license key?</p>
            <p style={styles.helpText}>
              Check your email from Gumroad. It should arrive within 2 minutes of purchase.
            </p>
          </div>
          
          <div style={styles.helpBox}>
            <p style={styles.helpTitle}>❓ Don't have a key yet?</p>
            <a 
              href="https://yourname.gumroad.com/l/talkflow-premium"
              style={styles.link}
            >
              Purchase TalkFlow Premium →
            </a>
          </div>
        </div>
        
        {/* Test Keys Section - Remove before production! */}
        <div style={styles.testSection}>
          <p style={styles.testTitle}>🧪 Testing? Use these keys:</p>
          <div style={styles.testKey}>
            <strong>Monthly:</strong>
            <code style={styles.code}>PMuKJiIjmAaCLm8d4KwcaA==</code>
            <button 
              onClick={() => setLicenseKey('PMuKJiIjmAaCLm8d4KwcaA==')}
              style={styles.miniButton}
            >
              Use
            </button>
          </div>
          <div style={styles.testKey}>
            <strong>Annual:</strong>
            <code style={styles.code}>GRFRs0-4DiRMOnKFfQXF8Q==</code>
            <button 
              onClick={() => setLicenseKey('GRFRs0-4DiRMOnKFfQXF8Q==')}
              style={styles.miniButton}
            >
              Use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  container: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '550px',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#111827'
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '16px'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '14px',
    fontSize: '15px',
    border: '2px solid #E5E7EB',
    borderRadius: '10px',
    marginBottom: '12px',
    fontFamily: 'monospace',
    fontSize: '14px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s'
  },
  button: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#6366F1',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  statusMessage: {
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '600'
  },
  helpSection: {
    marginTop: '30px',
    paddingTop: '30px',
    borderTop: '1px solid #E5E7EB'
  },
  helpBox: {
    marginBottom: '20px'
  },
  helpTitle: {
    fontWeight: '600',
    color: '#111827',
    marginBottom: '5px'
  },
  helpText: {
    color: '#6B7280',
    fontSize: '14px',
    margin: 0
  },
  link: {
    color: '#6366F1',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px'
  },
  testSection: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#FEF3C7',
    borderRadius: '10px',
    border: '2px solid #FCD34D'
  },
  testTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: '12px'
  },
  testKey: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
    fontSize: '13px'
  },
  code: {
    flex: 1,
    padding: '6px 10px',
    backgroundColor: 'white',
    border: '1px solid #FCD34D',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '12px'
  },
  miniButton: {
    padding: '6px 12px',
    backgroundColor: '#F59E0B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Activate;

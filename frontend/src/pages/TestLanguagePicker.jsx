import React from 'react';
import LanguagePicker from '@/components/LanguagePicker';

const TestLanguagePicker = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Language Picker Test</h1>
      <p>Testing the LanguagePicker component:</p>
      <div style={{ marginTop: '1rem' }}>
        <LanguagePicker />
      </div>
    </div>
  );
};

export default TestLanguagePicker;



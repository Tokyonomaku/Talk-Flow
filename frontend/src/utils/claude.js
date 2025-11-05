// Claude/Anthropic API utility
const ANTHROPIC_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const USE_REAL_LLM = import.meta.env.VITE_USE_REAL_LLM === '1';

export async function getClaudeResponse(userMessage, systemPrompt = "You are a helpful language tutor") {
  // Mock response for development
  if (!USE_REAL_LLM) {
    return {
      content: "¡Muy bien! That's correct. Great job practicing!",
      model: "mock"
    };
  }

  // Validate API key before making request
  if (!ANTHROPIC_KEY || ANTHROPIC_KEY.includes('YOUR-KEY-HERE')) {
    throw new Error('Anthropic API key not found. Please set VITE_ANTHROPIC_API_KEY in your .env file.');
  }

  // Validate input
  if (!userMessage || typeof userMessage !== 'string' || userMessage.trim().length === 0) {
    throw new Error('User message is required and must be a non-empty string.');
  }

  try {
    // Real Claude API call
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022', // Latest Claude model
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userMessage
          }
        ]
      })
    });

    if (!response.ok) {
      let errorText = 'Unknown error';
      try {
        errorText = await response.text();
      } catch (e) {
        // If we can't read error text, use status
        errorText = `HTTP ${response.status}`;
      }
      throw new Error(`Claude API error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();

    // Validate response structure
    if (!data || !data.content || !Array.isArray(data.content) || data.content.length === 0) {
      throw new Error('Invalid response format from Claude API');
    }

    if (!data.content[0].text) {
      throw new Error('Response content is missing text field');
    }

    return {
      content: data.content[0].text,
      model: data.model || 'claude-3-5-sonnet-20241022'
    };
  } catch (error) {
    // Re-throw known errors
    if (error.message.includes('API key') || error.message.includes('Invalid response') || error.message.includes('Claude API error')) {
      throw error;
    }
    // Wrap unexpected errors
    throw new Error(`Failed to get Claude response: ${error.message}`);
  }
}


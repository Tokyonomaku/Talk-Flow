// Test file for AI Chat functionality
import { askAI, askAIWithContext } from '../aiChat';

// Mock fetch for testing
global.fetch = jest.fn();

// Mock environment variable
const originalEnv = process.env;
beforeAll(() => {
  process.env.REACT_APP_OPENAI_API_KEY = 'test-api-key';
});

afterAll(() => {
  process.env = originalEnv;
});

describe('AI Chat Functions', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('askAI function should make API call with correct parameters', async () => {
    const mockResponse = {
      choices: [{ message: { content: 'Hola! ¿Cómo estás?' } }]
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await askAI('Hello, how are you?', 'Spanish');
    
    expect(fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': expect.stringContaining('Bearer'),
        },
        body: expect.stringContaining('Spanish tutor'),
      })
    );
    
    expect(result).toBe('Hola! ¿Cómo estás?');
  });

  test('askAIWithContext function should include language-specific configuration', async () => {
    const mockResponse = {
      choices: [{ message: { content: '¡Hola! (Hello!)\n\nGreat job with your greeting!' } }]
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await askAIWithContext('Hello', 'spanish', 'A1');
    
    expect(fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      expect.objectContaining({
        body: expect.stringContaining('Empathetic Spanish tutor'),
      })
    );
    
    expect(result).toBe('¡Hola! (Hello!)\n\nGreat job with your greeting!');
  });

  test('should handle API errors gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('API Error'));

    await expect(askAI('Hello', 'Spanish')).rejects.toThrow('API Error');
  });

  test('should handle non-ok responses', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
    });

    await expect(askAI('Hello', 'Spanish')).rejects.toThrow('HTTP error! status: 401');
  });
});

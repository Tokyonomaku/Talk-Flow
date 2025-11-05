// Test file for AI Chat functionality
import { askAI, askAIWithContext } from '../aiChat';

// Mock fetch for testing
global.fetch = jest.fn();

// Mock environment variables
const originalEnv = import.meta.env;
beforeAll(() => {
  import.meta.env.VITE_ANTHROPIC_API_KEY = 'test-api-key';
  import.meta.env.VITE_USE_REAL_LLM = '1';
});

afterAll(() => {
  import.meta.env = originalEnv;
});

describe('AI Chat Functions', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('askAI function should make API call with correct parameters', async () => {
    const mockResponse = {
      content: [{ text: 'Hola! ¿Cómo estás?' }],
      model: 'claude-3-5-sonnet-20241022'
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await askAI('Hello, how are you?', 'Spanish');
    
    expect(fetch).toHaveBeenCalledWith(
      'https://api.anthropic.com/v1/messages',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'x-api-key': 'test-api-key',
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: expect.stringContaining('Spanish tutor'),
      })
    );
    
    expect(result).toBe('Hola! ¿Cómo estás?');
  });

  test('askAIWithContext function should include language-specific configuration', async () => {
    const mockResponse = {
      content: [{ text: '¡Hola! (Hello!)\n\nGreat job with your greeting!' }],
      model: 'claude-3-5-sonnet-20241022'
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await askAIWithContext('Hello', 'spanish', 'A1');
    
    expect(fetch).toHaveBeenCalledWith(
      'https://api.anthropic.com/v1/messages',
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

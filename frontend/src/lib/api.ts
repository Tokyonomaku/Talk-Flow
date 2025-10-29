const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export interface ProcessTextRequest {
  action: string;
  text: string;
  targetLang?: string;
  tone?: string;
}

export interface ProcessTextResponse {
  result: string;
}

export async function processText(request: ProcessTextRequest): Promise<ProcessTextResponse> {
  const response = await fetch(`${API_BASE_URL}/api/process`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

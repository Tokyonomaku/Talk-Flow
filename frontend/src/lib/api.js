const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function processText(request) {
  try {
    const useRealLlm = import.meta.env.VITE_USE_REAL_LLM === "1";
    const path = useRealLlm ? "/api/llm/process" : "/api/process";

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      return { result: "[error] could not process" };
    }

    const data = await response.json();
    return { result: data?.result ?? "[error] could not process" };
  } catch {
    return { result: "[error] could not process" };
  }
}


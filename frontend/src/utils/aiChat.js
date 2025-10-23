// AI Chat utility function for TalkFlow language learning app
import { getLanguageName } from './languageUtils';

export async function askAI(userMessage, language) {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  
  if (!API_KEY) {
    throw new Error('OpenAI API key not found. Please set REACT_APP_OPENAI_API_KEY in your environment variables.');
  }
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a ${language} tutor. Correct mistakes and explain clearly.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI Chat error:', error);
    throw error;
  }
}

// Enhanced version with more context for language learning
export async function askAIWithContext(userMessage, language, level = 'A1') {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  
  if (!API_KEY) {
    throw new Error('OpenAI API key not found. Please set REACT_APP_OPENAI_API_KEY in your environment variables.');
  }
  
  // Language-specific tutor configurations
  const languageConfigs = {
    es: {
      tutor: "Empathetic Spanish tutor who struggled with the same challenges",
      target_language: getLanguageName('es'),
      levels: "A1 to C2 levels",
      special_instructions: `- Focus on: Subjunctive mood, Por vs Para, Preterite vs Imperfect, False cognates, Regional differences
- When correcting mistakes, explain like this: "That's technically correct but sounds textbook. Natives would say it THIS way instead..."
- Share personal struggles: "I struggled with this exact same thing for months!"
- Teach with empathy and real examples
- Address common confusion points with patience
- Explain regional differences (Spain vs Latin America)`
    },
    ja: {
      tutor: "Japanese language tutor",
      target_language: getLanguageName('ja'),
      levels: "N5/N4 levels"
    },
    fr: {
      tutor: "French language tutor",
      target_language: getLanguageName('fr'),
      levels: "A1/A2 levels"
    },
    de: {
      tutor: "German language tutor",
      target_language: getLanguageName('de'),
      levels: "A1/A2 levels"
    },
    zh: {
      tutor: "Chinese language tutor",
      target_language: getLanguageName('zh'),
      levels: "HSK1/HSK2 levels"
    },
    ru: {
      tutor: "Russian language tutor",
      target_language: getLanguageName('ru'),
      levels: "A1/A2 levels"
    },
    ar: {
      tutor: "Arabic language tutor",
      target_language: getLanguageName('ar'),
      levels: "A1/A2 levels"
    },
    ko: {
      tutor: "Korean language tutor",
      target_language: getLanguageName('ko'),
      levels: "A1/A2 levels"
    }
  };
  
  const config = languageConfigs[language] || languageConfigs.es;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a friendly ${config.tutor}. The student is at ${level} level.
            
Your role:
1. Respond in ${config.target_language} appropriate for their level
2. Provide English translation in parentheses
3. Give gentle corrections and helpful feedback
4. Keep responses encouraging and educational
5. Use simple grammar and vocabulary for ${config.levels}

${config.special_instructions || ''}

Format your response as:
${config.target_language} text
(English translation)

Then add feedback if needed.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI Chat error:', error);
    throw error;
  }
}

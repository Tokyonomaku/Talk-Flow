// AI Chat utility function for TalkFlow language learning app
import { getLanguageName } from './languageUtils';
import { getClaudeResponse } from './claude';

// Make API call using Claude
async function makeAPICall(messages, maxTokens = 500, systemMessage = null) {
  const systemPrompt = systemMessage || "You are a helpful language tutor";
  const userMessage = messages.find(m => m.role === 'user')?.content || messages[0]?.content || '';
  
  return await getClaudeResponse(userMessage, systemPrompt);
}

export async function askAI(userMessage, language) {
  try {
    const systemMessage = `You are a ${language} tutor. Correct mistakes and explain clearly.`;
    const messages = [
      {
        role: 'user',
        content: userMessage
      }
    ];
    
    const result = await makeAPICall(messages, 500, systemMessage);
    return result.content; // Return just the content for backward compatibility
  } catch (error) {
    console.error('AI Chat error:', error);
    throw error;
  }
}

// Enhanced version with more context for language learning
export async function askAIWithContext(userMessage, language, level = 'A1') {
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
    },
    fi: {
      tutor: "Finnish language tutor",
      target_language: getLanguageName('fi'),
      levels: "A1/A2 levels"
    }
  };
  
  const config = languageConfigs[language] || languageConfigs.es;
  
  try {
    const systemMessage = `You are a friendly ${config.tutor}. The student is at ${level} level.
            
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

Then add feedback if needed.`;

    const messages = [
      {
        role: 'user',
        content: userMessage
      }
    ];
    
    const result = await makeAPICall(messages, 500, systemMessage);
    return result.content; // Return just the content for backward compatibility
  } catch (error) {
    console.error('AI Chat error:', error);
    throw error;
  }
}

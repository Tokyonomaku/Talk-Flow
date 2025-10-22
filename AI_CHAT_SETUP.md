# AI Chat Integration Setup

This document explains how to set up the AI chat functionality in your TalkFlow language learning app.

## Environment Variables

To use the AI chat functionality, you need to set up your OpenAI API key as an environment variable.

### Frontend Setup

1. Create a `.env` file in the `frontend/` directory
2. Add your OpenAI API key:

```bash
# Frontend .env file
REACT_APP_OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### Getting Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key and paste it in your `.env` file

### Usage

The AI chat functionality is now integrated into the Conversation page. Users can:

- Chat with an AI tutor in their selected language
- Get corrections and explanations
- Receive feedback tailored to their language level
- Practice conversation with context-aware responses

### Features

- **Language-specific tutors**: Each language has a specialized AI tutor
- **Level-appropriate responses**: Responses are tailored to the user's proficiency level
- **Enhanced Spanish support**: Special focus on subjunctive, por vs para, and regional differences
- **Real-time feedback**: Immediate corrections and explanations
- **XP rewards**: Users earn experience points for conversations

### Supported Languages

- Spanish (with advanced grammar focus)
- Japanese
- French
- German
- Chinese
- Russian
- Arabic
- Korean

### API Usage

The integration uses the `askAIWithContext` function from `src/utils/aiChat.js` which:

1. Sends user messages to OpenAI's GPT-4o-mini model
2. Uses language-specific system prompts
3. Parses responses to extract content, translations, and feedback
4. Handles errors gracefully with user-friendly messages

### Cost Considerations

- Uses GPT-4o-mini for cost efficiency
- Limited to 500 tokens per response
- Consider implementing usage limits for production

### Security Notes

- Never commit your API key to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production use

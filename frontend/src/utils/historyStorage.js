/**
 * History Storage Utilities
 * Manages localStorage operations for app history
 */

const HISTORY_KEY = 'app_history';
const MAX_ENTRIES = 10;

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
const truncateText = (text, maxLength) => {
  if (!text || typeof text !== 'string') return '';
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

/**
 * Get all history entries from localStorage
 * @returns {Array} - Array of history objects
 */
export const getHistory = () => {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to load history:', error);
    return [];
  }
};

/**
 * Save a new history entry
 * @param {string} action - Action type (e.g., "summarize", "translate")
 * @param {string} input - Input text
 * @param {string} output - Output result
 * @returns {Object} - The saved history entry
 */
export const saveHistoryEntry = (action, input, output) => {
  try {
    const history = getHistory();
    
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      action: action || 'unknown',
      input: truncateText(input, 50),
      output: truncateText(output, 100),
      createdAt: new Date().toISOString(),
    };
    
    // Add new entry at the beginning (newest first)
    const updatedHistory = [newEntry, ...history].slice(0, MAX_ENTRIES);
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    
    return newEntry;
  } catch (error) {
    console.error('Failed to save history entry:', error);
    return null;
  }
};

/**
 * Clear all history from localStorage
 */
export const clearHistory = () => {
  try {
    localStorage.removeItem(HISTORY_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear history:', error);
    return false;
  }
};

/**
 * Get history count
 * @returns {number} - Number of history entries
 */
export const getHistoryCount = () => {
  return getHistory().length;
};


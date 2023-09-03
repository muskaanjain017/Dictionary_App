export const addWordToHistory = (word) => ({
    type: 'ADD_WORD_TO_HISTORY',
    payload: word,
  });
  
  export const clearHistory = () => ({
    type: 'CLEAR_HISTORY',
  });
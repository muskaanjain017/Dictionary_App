const initialState = {
    history: [],
    // other initial state...
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WORD_TO_HISTORY':
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      case 'CLEAR_HISTORY':
        return {
          ...state,
          history: [],
        };
      // other cases...
      default:
        return state;
    }
  };
  
  export default rootReducer;

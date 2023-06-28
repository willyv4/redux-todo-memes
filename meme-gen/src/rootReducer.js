const initialState = { meme: null };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, meme: state.meme };
    case "DELETE":
      return { ...state, meme: state.meme };

    default:
      return state;
  }
}

export default rootReducer;

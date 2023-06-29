const initialState = { meme: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, meme: [...state.meme, action.payload] };
    case "DELETE":
      return {
        ...state,
        meme: state.meme.filter((m) => m.id !== action.payload),
      };

    default:
      return state;
  }
}

export default rootReducer;

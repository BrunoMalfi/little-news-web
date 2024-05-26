const characters = (state, action) => {
    switch (action.type) {
      case "GET_CHARACTERS":
        return {
          ...state,
          characters: action.payload,
        };
        case "GET_NEWS":
        return {
          ...state,
          news: action.payload,
        };
        case "GET_TEST":
        return {
          ...state,
          test: action.payload,
        };
      default:
        return state;
    }
  };
  export default characters;
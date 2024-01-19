const initialState = {
  fetchResultRock: [],
  fetchResultPop: [],
  fetchResultHipHop: [],
  searchResults:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROCK_RESULTS":
      return { ...state, fetchResultsRock: action.payload };
    case "SET_POP_RESULTS":
      return { ...state, fetchResultsPop: action.payload };
    case "SET_HIPHOP_RESULTS":
      return { ...state, fetchResultsHipHop: action.payload };
      case 'SET_SEARCH_RESULTS':
        return { ...state, fetchSearchResults: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
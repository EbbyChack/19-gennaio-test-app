const initialState = {
  fetchResultRock: [],
  fetchResultPop: [],
  fetchResultHipHop: [],
  searchResults: [],
  fetchCurrentSong:[],
  likedSongs:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROCK_RESULTS":
      return { ...state, fetchResultsRock: action.payload };
    case "SET_POP_RESULTS":
      return { ...state, fetchResultsPop: action.payload };
    case "SET_HIPHOP_RESULTS":
      return { ...state, fetchResultsHipHop: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, fetchSearchResults: action.payload };
    case "SET_CURRENT_SONG":
      return{...state, fetchCurrentSong: action.payload};
      case "SET_LIKE":
        return{...state, likedSongs: [...state.likedSongs, action.payload]};
      case "REMOVE_LIKE":
        return{...state, likedSongs: state.likedSongs.filter((song) => song !== action.payload)};
    default:
      return state;
  }
};

export default rootReducer;

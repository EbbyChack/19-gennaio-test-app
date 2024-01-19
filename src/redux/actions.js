export const setRockResults = (results) => ({
    type: 'SET_ROCK_RESULTS',
    payload: results,
  });
  
  export const setPopResults = (results) => ({
    type: 'SET_POP_RESULTS',
    payload: results,
  });
  
  export const setHipHopResults = (results) => ({
    type: 'SET_HIPHOP_RESULTS',
    payload: results,
  });

  export const setSearchResults = (results) => ({
    type:'SET_SEARCH_RESULTS',
    payload: results,
  });

  export const setCurrentSong = (results) => ({
    type:'SET_CURRENT_SONG',
    payload: results,
  });

  export const setLike = (results) => ({
    type:'SET_LIKE',
    payload: results,
  })
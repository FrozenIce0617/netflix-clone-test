export const initialState = {
  movies: [],
};

function reducer(state = initialState, action = {}) {
  console.log(action)
  switch (action.type) {
    case "UPDATE_MOVIE_LIST": {
      return {
        ...state,
        movies: state.movies.concat(action.movies),
      };
    }

    case "ADD_MOVIE": {
      const isExist = state.movies.find(
        (movie) => movie.id === action.movie.id
      );
      return isExist
        ? { ...state }
        : {
            ...state,
            movies: [...state.movies, action.movie],
          };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;

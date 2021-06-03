export const initialState = {
  movies: [],
  isLoading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "UPDATE_MOVIE_LIST": {
      const newMovies = action.movies.filter(newMovie => !state.movies.some(prevMovie => prevMovie.id === newMovie.id))

      return {
        ...state,
        movies: state.movies.concat(newMovies),
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

    case "SET_LOADING_STATUS": {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;

import useAppDispatch from "./dispatch_hook";
import useAppState from "./state_hook";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config";

function useApp() {
  const appDispatch = useAppDispatch();

  const updateMovies = () => {
    fetch(
      `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.floor(
        Math.random() * 101
      )}`
    )
      .then((result) => result.json())
      .then((response) =>
        appDispatch({
          type: "UPDATE_MOVIE_LIST",
          movies: response?.results,
        })
      );
  };

  const getMovieById = (id) => {
    fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((result) => result.json())
      .then((response) => {
        if (response.id)
          appDispatch({
            type: "ADD_MOVIE",
            movie: response,
          });
      });
  };

  const initialData = {
    movies: [],
    updateMovies,
    getMovieById,
  };

  const appState = useAppState(initialData);

  return [appState, appDispatch];
}

export default useApp;

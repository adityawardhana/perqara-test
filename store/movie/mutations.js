export default {
  setMovies(state, nextState) {
    if (nextState.loadMore) {
      state.movies = [...state.movies, ...nextState.movies]
    } else {
      state.movies = nextState.movies
    }
  },
  setMovie(state, nextState) {
    state.movie = nextState
  },
  setMovieRecommendations(state, nextState) {
    state.recommendations = nextState
  },
  setMovieDiscovers(state, nextState) {
    state.discovers = nextState
  },
  setMovieReviews(state, nextState) {
    state.reviews = nextState
  },
}

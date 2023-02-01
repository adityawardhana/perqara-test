export default {
  setTVs(state, nextState) {
    if (nextState.loadMore) {
      state.tvs = [...state.tvs, ...nextState.tvs]
    } else {
      state.tvs = nextState.tvs
    }
  },
  setTV(state, nextState) {
    state.tv = nextState
  },
  setTVRecommendations(state, nextState) {
    state.recommendations = nextState
  },
  setTVDiscovers(state, nextState) {
    state.discovers = nextState
  },
  setTVReviews(state, nextState) {
    state.reviews = nextState
  },
}

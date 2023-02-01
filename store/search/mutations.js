export default {
  setSearch(state, nextState) {
    state.results = nextState.results
    state.total_pages = nextState.total_pages
    state.total_results = nextState.total_results
  },
}

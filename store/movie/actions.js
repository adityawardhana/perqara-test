import qs from 'qs'
import { API } from '../../config/api'

export default {
  async fetchMovies(
    { commit },
    { sortBy = 'popular', page = 1, loadMore = false } = {}
  ) {
    try {
      const res = await this.$axios.$get(
        `${API.MOVIE}/${sortBy}?${qs.stringify({ page })}`
      )
      const data = { movies: res.results, loadMore }
      commit('setMovies', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchMovie({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(`${API.MOVIE}/${id}`)
      commit('setMovie', res)
      return res
    } catch (error) {
      throw new Error(error)
    }
  },

  async fetchMovieRecommendations({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(
        `${API.MOVIE}/${id}/recommendations`
      )
      commit('setMovieRecommandations', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchMovieDiscovers({ commit }, { sortBy = 'popular', page = 1 }) {
    try {
      const res = await this.$axios.$get(
        `${API.MOVIE}/${sortBy}?${qs.stringify({ page })}`
      )
      commit('setMovieDiscovers', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchMovieReviews({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(`${API.MOVIE}/${id}/reviews`)
      commit('setMovieReviews', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
}

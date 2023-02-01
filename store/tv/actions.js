import qs from 'qs'
import { API } from '../../config/api'

export default {
  async fetchTVs(
    { commit },
    { sortBy = 'popular', page = 1, loadMore = false } = {}
  ) {
    try {
      const res = await this.$axios.$get(
        `${API.TV}/${sortBy}?${qs.stringify({ page })}`
      )
      const data = { tvs: res.results, loadMore }
      commit('setTVs', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchTV({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(`${API.TV}/${id}`)
      commit('setTV', res)
      return res
    } catch (error) {
      throw new Error(error)
    }
  },

  async fetchTVRecommendations({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(`${API.TV}/${id}/recommendations`)
      commit('setTVRecommandations', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchTVDiscovers({ commit }, { sortBy = 'popular', page = 1 }) {
    try {
      const res = await this.$axios.$get(
        `${API.TV}/${sortBy}?${qs.stringify({ page })}`
      )
      commit('setTVDiscovers', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchTVReviews({ commit }, { id } = {}) {
    try {
      const res = await this.this.$axios.$get(`${API.TV}/${id}/reviews`)
      commit('setTVReviews', res.results)
      return res.results
    } catch (error) {
      throw new Error(error)
    }
  },
}

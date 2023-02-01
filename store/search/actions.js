import qs from 'qs'
import { API } from '../../config/api'

export default {
  async searchMovie({ commit }, { query = '', page = 1 } = {}) {
    try {
      const res = await this.$axios.$get(
        `${API.SEARCH_MOVIE}?${qs.stringify({ page, query })}`
      )
      commit('setSearchMovie', res.results)
      return res
    } catch (error) {
      throw new Error(error)
    }
  },
  async searchTV({ commit }, { query = '', page = 1 } = {}) {
    try {
      const res = await this.$axios.$get(
        `${API.SEARCH_TV}?${qs.stringify({ page, query })}`
      )
      commit('setSearchTV', res.results)
      return res
    } catch (error) {
      throw new Error(error)
    }
  },
}

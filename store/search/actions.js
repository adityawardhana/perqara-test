import qs from 'qs'
import { API } from '../../config/api'

export default {
  async search({ commit }, { query = '', page = 1 } = {}) {
    try {
      const res = await this.$axios.$get(
        `${API.SEARCH}?${qs.stringify({ page, query })}`
      )
      commit('setSearch', res)
      return res
    } catch (error) {
      throw new Error(error)
    }
  },
}

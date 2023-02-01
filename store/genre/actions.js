import { API } from '../../config/api'

export default {
  async fetchGenres({ commit }) {
    try {
      const res = await this.$axios.$get(API.GENRE)
      commit('setGenres', res.genres)
      return res.genres
    } catch (error) {
      throw new Error(error)
    }
  },
}

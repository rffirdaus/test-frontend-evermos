export const state = () => ({
  isLoading: false,
  error: null,
  product: [],
  detail: {}
})

export const mutations = {
  setLoading(state, loading) {
    state.isLoading = loading
  },

  setError(state, data) {
    state.error = data
  },

  setProduct(state, data) {
    state.isLoading = true
    state.product = data
  },

  setDetail(state, data) {
    state.detail = data
    state.isLoading = true
  },

}

export const actions = {
  async listProduct({ commit }) {
    commit('setLoading', true)
    commit('setError', null)
    await this.$axios
      .get('/product')
      .then((response) => {
        commit('setProduct', response.data)
        commit('setLoading', false)
        return response
      })
      .catch((e) => {
        commit('setLoading', false)
        commit('setError', e.response)
      })
    return false
  },

  async getDetail({ commit }, id) {
    commit('setLoading', true)
    commit('setError', null)
    await this.$axios
      .get(`/product/${id}`,)
      .then((response) => {
        commit('setDetail', response.data)
        commit('setLoading', false)
        return response
      })
      .catch((e) => {
        commit('setLoading', false)
        commit('setError', e.response)
      })
    return false
  },
}

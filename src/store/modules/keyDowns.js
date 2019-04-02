const state = {
  activeKeys: []
}

const getters = {}

const actions = {
  KEY_DOWNS_ADD_KEY(context, payload) {
    context.commit('KEY_DOWNS_ADD_KEY_MUT', payload)
  },
  KEY_DOWNS_REMOVE_KEY(context, payload) {
    context.commit('KEY_DOWNS_ADD_REMOVE_MUT', payload)
  }
}

const mutations = {
  KEY_DOWNS_ADD_KEY_MUT(state, payload) {
    if (!state.activeKeys.includes(payload)) state.activeKeys.push(payload)
  },
  KEY_DOWNS_ADD_REMOVE_MUT(state, payload) {
    state.activeKeys = state.activeKeys.filter(item => item != payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

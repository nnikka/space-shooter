const state = {
  velocity: 2,
  score: 0,
}

const getters = {
  PLAYER_GET_VELOCITY(state) {
    return state.velocity
  }
}

const actions = {
  PLAYER_CHANGE_LEVEL(context, payload) {
    context.commit('PLAYER_MUT_CHANGE_LEVEL', payload)
  },
  PLAYER_ADD_SCORE(context, payload) {
    context.commit('PLAYER_MUT_ADD_SCORE', payload)
  }
}

const mutations = {
  PLAYER_MUT_CHANGE_LEVEL(state, payload) {
    state.velocity = state.velocity
  },
  PLAYER_MUT_ADD_SCORE(state, payload) {
    state.score = state.score
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

const state = {
  velocity: 2,
  score: 0,
  shootingRate: 500,
  bulletVelocity: 12
}

const getters = {
  PLAYER_GET_VELOCITY(state) {
    return state.velocity
  },
  PLAYER_GET_SHOOTINGRATE(state) {
    return state.shootingRate
  },
  PLAYER_GET_BULLETVELOCITY(state) {
    return state.bulletVelocity
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

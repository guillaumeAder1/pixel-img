import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    numberCells: state => state.numberCells
  },
  state: {
    numberCells: 2
  },
  mutations: {
    UPDATE_CELL_NUMBER (state, payload) {
      state.numberCells = payload
    }
  },
  actions: {

  }
})

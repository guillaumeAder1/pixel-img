import Vue from 'vue'
import Vuex from 'vuex'
import { platform } from 'os';

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    numberCells: state => state.numberCells,
    cellWidth: state => state.cellWidth,
    cellHeight: state => state.cellHeight
  },
  state: {
    numberCells: 2,
    cellWidth: 0,
    cellHeight: 0
  },
  mutations: {
    UPDATE_CELL_NUMBER (state, payload) {
      state.numberCells = payload
    },
    set_cellWidth (state, payload) {
      state.cellWidth = payload
    },
    set_cellHeight (state, payload) {
      state.cellHeight = payload
    }
  },
  actions: {

  }
})

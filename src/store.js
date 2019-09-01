import Vue from 'vue'
import Vuex from 'vuex'
import { platform } from 'os';

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    numberCells: state => state.numberCells,
    cellWidth: state => state.cellWidth,
    cellHeight: state => state.cellHeight,
    colorData: state => state.colorData,
    renderers: state => state.renderers,
    imgSource: state => state.imgSource
  },
  state: {
    numberCells: 2,
    cellWidth: 0,
    cellHeight: 0,
    colorData: [],
    renderers: [],
    imgSource: ''
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
    },
    SET_COLOR_DATA (state, payload) {
      state.colorData = payload
      state.renderers.push(payload)
    },
    ADD_RENDER(state, payload) {
      state.renderers.push(payload)
    },
    SET_IMG_SOURCE(state, payload) {
      state.imgSource = payload
    }
  },
  actions: {

  }
})

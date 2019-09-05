import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  getters: {
    numberCells: state => state.numberCells,
    cellWidth: state => state.cellWidth,
    cellHeight: state => state.cellHeight,
    colorData: state => state.colorData,
    renderers: state => state.renderers,
    imgSource: state => state.imgSource,
    list: state => state.list,
    listSelectorId: state => id => state.list.filter(e => e.id === id),
    imgList: state => state.imgList,
    selectImg: state => id => state.imgList.filter(e => e.id === id)
  },
  state: {
    numberCells: 2,
    cellWidth: 0,
    cellHeight: 0,
    colorData: [],
    renderers: [],
    imgSource: '',
    list: [],
    imgList: [], // init with one empty
  },
  mutations: {
    NEW_IMG_LIST (state, payload) {
      state.imgList.push(payload)
    },
    ADD_LIST (state, payload) {
      state.list.push(payload)
    },
    UPDATE_NAME (state, payload) {
      payload.current[0].name  = payload.data.val
    },
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
    UPDATE_LIST_ITEM ({getters, commit}, payload) {
      console.log(getters)
      const current = getters.listSelectorId(payload.id)
      commit('UPDATE_NAME', { data: payload, current})
    }
  }
})

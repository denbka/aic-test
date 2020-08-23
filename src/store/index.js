import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    noteForm: {
      title: '',
      todos: []
    }
  },
  getters: {
    notes: state => state.notes,
    noteForm: state => state.noteForm,
  },
  mutations: {
    ADD_NOTE(state, data) {
      state.notes.push(data)
      this.commit('SET_LOCALSTORAGE_ITEMS')
    },
    DELETE_NOTE(state, id) {
      const index = state.notes.findIndex(item => item.id === id)
      state.notes.splice(index, 1)
      this.commit('SET_LOCALSTORAGE_ITEMS')
    },
    EDIT_NOTE(state, data) {
      const index = state.notes.findIndex(item => item.id === data.id)
      state.notes.splice(index, 1, data)
      this.commit('SET_LOCALSTORAGE_ITEMS')
    },
    SET_FORM(state, form) {
      state.noteForm = { ...form }
    },
    SET_ITEMS(state, data) {
      state.notes = data
    },
    SET_LOCALSTORAGE_ITEMS(state) {
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
  },
})

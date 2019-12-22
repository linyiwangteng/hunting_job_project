import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsContent: ''
  },
  getters: {
    getNewsContent(state){
      return state.newsContent
    }
  },
  mutations: {
    setNewsContent(state,data){
      state.newsContent = data;
    }
  },
  actions: {

  },
  modules: {
  }
})

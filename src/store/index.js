import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: 'https://thecntgfy.ru',
    role: '' /*String: 'mentor', 'owner', 'newbie'*/, 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

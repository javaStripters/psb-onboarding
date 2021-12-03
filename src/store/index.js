import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: 'https://thecntgfy.ru',
    role: '' /*String: 'mentor', 'owner', 'newbie'*/, 
    userId: 1,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

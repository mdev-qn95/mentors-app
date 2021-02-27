import { createStore } from 'vuex'

import coursesModule from './modules/courses/index.js'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    courses: coursesModule
  }
})

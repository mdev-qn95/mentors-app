import { createStore } from 'vuex'

import mentorsModule from './modules/mentors/index.js'
import requestsModule from './modules/requests/index.js'
const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'm3'
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
})
export default store;

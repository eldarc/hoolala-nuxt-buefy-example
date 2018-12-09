import Vuex from 'vuex'

// Modules
import items from './modules/items'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {},
    modules: {
      items
    }
  })
}

export default createStore

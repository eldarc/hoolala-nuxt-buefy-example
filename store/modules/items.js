import Vue from 'vue'

const namespaced = true

const state = () => {
  return {
    groups: [],
    items: {}
  }
}

const getters = {
  getGroups(state) {
    return state.groups
  },
  getItems(state) {
    return state.items
  }
}

const mutations = {
  newGroup(state, data) {
    state.groups.push({
      name: data,
      order: 'auto'
    })
    Vue.set(state.items, data, [])
  }
}

const actions = {
  addGroup(context, data) {
    if (data) {
      context.commit('newGroup', data)
      return Promise.resolve(data)
    }
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

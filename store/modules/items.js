import Vue from 'vue'

const namespaced = true

const state = () => {
  return {
    groups: ['Roll', 'Toppings', 'Fish'],
    items: {
      Roll: [
        {
          title: 'Sushi Rice',
          type: 'kg',
          quantity: 5,
          price: 3
        },
        {
          title: 'Seaweed',
          type: 'Piece',
          quantity: 100,
          price: 0.1
        },
        {
          title: 'Rice vinegar',
          type: 'l',
          quantity: 2,
          price: 5
        },
        {
          title: 'Sugar',
          type: 'kg',
          quantity: 2,
          price: 1
        },
        {
          title: 'Salt',
          type: 'kg',
          quantity: 1,
          price: 1
        }
      ],
      Toppings: [
        {
          title: 'Avocado',
          type: 'Piece',
          quantity: 10,
          price: 1.5
        },
        {
          title: 'Soy sauce',
          type: 'l',
          quantity: 3,
          price: 2
        },
        {
          title: 'Wasabi',
          type: 'g',
          quantity: 350,
          price: 0.05
        }
      ],
      Fish: [
        {
          title: 'Tuna',
          type: 'kg',
          quantity: 5,
          price: 10
        }
      ]
    }
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
  newGroup(state, group) {
    state.groups.push(group)
    Vue.set(state.items, group, [])
  },
  removeGroup(state, data) {
    state.groups = state.groups.filter(group => group !== data)
    Vue.delete(state.items, data)
  },
  setGroups(state, data) {
    state.groups = data
  }
}

const actions = {
  addGroup(context, data) {
    if (data) {
      context.commit('newGroup', data)
      return Promise.resolve(data)
    }
  },
  removeGroup(context, group) {
    context.commit('removeGroup', group)
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

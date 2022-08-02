import pizzas from './pizzas';

const state = {
    pizzas: [],
}

const mutations = {
    setPizzas(state, pizzas) {
        state.pizzas = pizzas
    }
}

const actions = {
    fetchPizzas({ commit }) {
        commit('setPizzas', pizzas)
    }
}

const getters = {
    getPizzas(state) {
        return state.pizzas
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
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
    },
    addPizza({ commit }, input) {
        let pizza = {
            id: state.pizzas[state.pizzas.length-1].id + 1,
            name: input.name,
            price: parseInt(input.price),
            ingredients: input.ingredients,
            isExpanded: false,
            inCart: false,
            nrOfItemsInCart: 0,
            extraPrice: 0,
            extraIngredients: input.extra,
        }
        
        commit('setPizzas', [...pizzas, pizza])
    },
    // deletePizza({ commit }) {

    // }
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
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
            id: Math.max(...state.pizzas.map(p => p.id)) + 1,
            name: input.name,
            price: parseInt(input.price),
            ingredients: input.ingredients,
            isExpanded: false,
            inCart: false,
            nrOfItemsInCart: 0,
            extraPrice: 0,
            extraIngredients: input.extra,
        }

        let newArray = [...state.pizzas, pizza]
        
        commit('setPizzas', newArray)
    },
    editPizza({ commit }, input) {
        let pizza = {
            id: input.id,
            name: input.name,
            price: parseInt(input.price),
            image: input.image,
            ingredients: input.ingredients,
            isExpanded: input.isExpanded,
            inCart: input.inCart,
            nrOfItemsInCart: input.nrOfItemsInCart,
            extraPrice: input.extraPrice,
            extraIngredients: input.extra,
        }

        let oldArray = state.pizzas;

        let midArray = oldArray.filter(p => p.id !== input.id)
        
        let newArray = [...midArray, pizza]

        commit('setPizzas', newArray)
    },
    deletePizza({ commit }, pizza) {
        let newArray = state.pizzas.filter(p => p.id !== pizza.id)
        commit('setPizzas', newArray)
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
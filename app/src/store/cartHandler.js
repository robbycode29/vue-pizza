const state = {
    cart: [],
}

const mutations = {
    setCart(state, pizzas) {
        state.cart = pizzas
    }
}

const actions = {
    addPizzaToCart({ commit }, pizza) {
        let newCart = [...state.cart, pizza]
        commit('setCart', newCart)
    },
    updatePizzaInCart({ commit }, pizza) {
        let index = state.cart.forEach(p => {
            if (p.id === pizza.id) {
                return state.cart.indexOf(p)
            }
            return null
        });
        if (index !== null) {
            let newCart = [...state.cart]
            newCart[index] = pizza
            newCart.splice(index, 1)
            commit('setCart', newCart)
        }   
    },
    removePizzaFromCart({commit}, pizza) {
        let newCart = [...state.cart]
        newCart.splice(state.cart.indexOf(pizza), 1)
        commit('setCart', newCart)
    }
}

const getters = {
    getCart(state) {
        return state.cart
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
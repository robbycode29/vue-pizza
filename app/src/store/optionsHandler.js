import extraIngredients from "./extraIngredients"

const state = {
    ingredients: [],
    selection: [],
}

const mutations = {
    setIngredients(state, ingredients) {
        state.ingredients = ingredients
    },
    setSelection(state, selection) {
        state.selection = selection
    }
}

const actions = {
    fetchIngredients({ commit }) {
        commit('setIngredients', extraIngredients)
    },
    addSelected({ commit }, ingredient) {
        commit('addSelected', ingredient)
    }
}

const getters = {
    getIngredients(state) {
        return state.ingredients
    },
    getSelected(state) {
        return state.selection
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
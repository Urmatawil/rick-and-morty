import { createStore } from 'vuex'
//con createStore creamos todas las acciones, variables
//con useStore las usamos en los componentes que la requieran

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },

  mutations: {
    setCharacter(state, payload) {
      state.characters = payload
    },
    setCharacterFilter(state, payload) {
      state.charactersFilter = payload
    }
  },

  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        //el commit es nuestro disparador para ejecutar la acción
        //esto actualiza el estado de nuestras variables, las muta
        commit('setCharacter', data.results)
        commit('setCharacterFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    }
  },

  modules: {
  }
})

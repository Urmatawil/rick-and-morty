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
    },

    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter(character => character.status.includes(status))
      commit('setCharacterFilter', results)
    },

    filterByName({ commit, state }, name) {
      //pasamos a minuscula el nombre que vamos a pasar
      const formatName = name.toLowerCase()
      const results = state.characters.filter(character => {
        //pasamos a minusculas todos los nombres del arreglo
        const arrayName = character.name.toLowerCase()
        //si el arreglo incluye el nombre formateado que le pasamos
        if (arrayName.includes(formatName)) { return character }

      })
      commit('setCharacterFilter', results)
    }
  },

  modules: {
  }
})

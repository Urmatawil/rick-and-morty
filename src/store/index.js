import { createStore } from 'vuex'

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
        console.log(data);
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})

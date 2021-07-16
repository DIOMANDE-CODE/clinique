import { createStore } from 'vuex'

export default createStore({
  state: {
    currentIdentifiant : '0'
  },
  mutations: {
   setCurrentIdentifiant(state,payload){
     state.currentIdentifiant = payload
   }
  },
  actions: {
    setCurrentIdentifiant(state,payload){
      localStorage.setItem('identifiant', payload)
      state.commit('setCurrentIdentifiant', payload)
    }
  },
  modules: {
  },
  getters: {
    getCurrentIdentifiant : state => state.currentIdentifiant
  }
})

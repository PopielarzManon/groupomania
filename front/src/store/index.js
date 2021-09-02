import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      pseudo: '',
      idUser:'',
      email: ''
    }
  },
  mutations: {
    LOGIN(state,data){
      state.user.pseudo = data.user.pseudo
      state.user.id = data.user.id
      state.user.email = data.user.email

    }

  },
  getters:{
    getUser:state => state.user
  },
  actions: {
  
  },
  modules: {
  }
})

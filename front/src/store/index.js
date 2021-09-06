import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      pseudo: '',
      id:'',
      email: '',
      isAdmin:'',
      
    },
    token:''
  },
  mutations: {
    LOGIN(state,data){
      state.user.pseudo = data.user
      state.user.id = data.userId
      state.user.email = data.email
      state.user.isAdmin = data.isAdmin
      state.token = data.token

    },
    GET_COMMENTS(state, data) {
      state.comments = data;
    },
    LOGOUT(state) {
      state.token = "";
      state.username = "";
      state.isAdmin = "";
    },

  },
  getters:{
    getUser:state => state.user,
    getToken: state => state.token,
    getComments: state => state.comments

  },
  actions: {
  
  },
  modules: {
  }
})

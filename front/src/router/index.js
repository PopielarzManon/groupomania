import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

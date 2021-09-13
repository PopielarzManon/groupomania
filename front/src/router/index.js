import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"
import Wall from "../views/Wall.vue"
import Newmsg from '../views/Newmsg.vue'
import Comment from "../views/Comments.vue"
import store from '../store'

Vue.use(VueRouter)
const isOk = (to, from, next) => {
  if ( store.getters.getToken ) {
    next()
    return
  }
  next("/login")
}
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
  },

  {
    path: '/wall',
    name: 'Wall',
    component: Wall,
    beforeEnter: isOk
  },
  {
    path: '/messages',
    name: 'Newmsg',
    component: Newmsg,
    beforeEnter: isOk,
  },
  {
    path: '/:messageId/comments',
    name: 'Comments',
    component: Comment,
    beforeEnter: isOk,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router

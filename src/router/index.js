import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Teaser from '../components/Teaser'
import Listener from '../components/Listener'
import Meditate from '../components/Meditate'
import Library from '../components/Library'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Teaser
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listener',
      name: 'Listener',
      component: Listener
    },
    {
      path:'/meditate',
      name: 'Meditate',
      component: Meditate
    },
    {
      path:'/library',
      name: "Library",
      component: Library
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  }   else {
    next()
  }
})

export default router
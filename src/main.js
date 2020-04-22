import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import 'es6-promise/auto'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store/index.js';
import './filters/index.js'

import firebase from 'firebase/app'
import 'firebase/firestore'

window.$ = window.jQuery = require('jquery');

// Install BootstrapVue and Icons
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/*new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
*/
let app
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
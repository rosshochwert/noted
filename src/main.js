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

import { firestorePlugin } from 'vuefire'

import firebase from 'firebase/app'
import 'firebase/firestore'


window.$ = window.jQuery = require('jquery');

// Install BootstrapVue and Icons
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(firestorePlugin)

const config  = {
    apiKey: "AIzaSyAu_M4J3b6kkfAv4KI4eihmQrSEdojGYe8",
    authDomain: "music-meditation-25271.firebaseapp.com",
    databaseURL: "https://music-meditation-25271.firebaseio.com",
    projectId: "music-meditation-25271",
    storageBucket: "music-meditation-25271.appspot.com",
    messagingSenderId: "628415999621",
    appId: "1:628415999621:web:2b5b4e4d3a8182a01e03ec",
    measurementId: "G-9S0PXTDWSK"
  };

firebase.initializeApp(config)
export const db = firebase.firestore()

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
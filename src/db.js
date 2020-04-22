import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

import firebase from 'firebase/app'
import 'firebase/firestore'

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
// firebase init goes here
/*const config = {
    apiKey: "AIzaSyCtt31_plTX0_nwcXmxun_pxtLsazVqsD0",
    authDomain: "api-project-392169941721.firebaseapp.com",
    databaseURL: "https://api-project-392169941721.firebaseio.com",
    projectId: "api-project-392169941721",
    storageBucket: "api-project-392169941721.appspot.com",
    messagingSenderId: "392169941721",
    appId: "1:392169941721:web:463e23cef611f09f602cc8",
    measurementId: "G-M2895V0K9W"
}

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}*/
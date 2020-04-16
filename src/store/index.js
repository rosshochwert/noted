import Vue from 'vue';
import Vuex from 'vuex';
import {Howl} from 'howler';
import { firestorePlugin } from 'vuefire'
import { db } from '../main.js'
import song_json from '../assets/music/songs.json'

Vue.use(Vuex);
Vue.use(firestorePlugin)

const store = new Vuex.Store({
	state: {
		songs: song_json,
		history: [],
		sound: null,
		player: {
			isLoading: false,
			isPlaying: false,
			isLoaded: false,
			isPaused: false,
			currentSong: {name: '', copyright: ''}
		},
		user: {
			first: ''
		},
		loggedIn: null
	},
	mutations: {
		reset (state) {
			Object.keys(state.player).forEach(v => state.player[v] = false)
			try {
				state.sound.stop();
			} catch (e) {
				//console.log(e);
			}

			state.sound = null
		},
		load (state) {
			state.player.isLoading = true;
		},
		togglePlaying (state) {
			if(state.player.isPlaying){
				state.sound.pause();
			} else {
				state.sound.play();
			}

			state.player.isPlaying = !state.player.isPlaying;
			state.player.isPaused = !state.player.isPaused;
		},
		setUser(state, data){
			state.user = data;
		},
		setLogin(state, data){
			state.loggedIn = data;
		},
		play(state, path){
			state.sound = new Howl({
				src: path,
				html5: true,
				onloaderror: function(id, error){
					console.log(error)
					return error;
				},
				onplayerror: function(id, error){
					console.log(error)
				},
				onplay: function(){
					return true;
				}
			});

			state.sound.play();
			state.player.isPlaying = true;
			state.player.isLoading = false;
		}
	},
	actions: {
		step (context){
			if (context.state.player.isPlaying){
				var sound = context.state.sound;
				var seek = sound.seek() || 0;
				console.log(seek);
			}
		},
		initializePlayer (context) {
			context.commit('load');
			var path = require('@/assets/music/Overture to the Marriage of Figaro - Brass quintet.mp3')
			context.commit('play', path);
		},
		playSong (context, random){
			if (random){
				//tbd
			} else {
				//tbd
			}
		},
		playRandomSong (context) {
			context.commit('reset');
			context.commit('load');
			var base = 'https://imslp.org'
			var randomInt = Math.floor(Math.random() * (context.state.songs.length))
			var link = context.state.songs[randomInt]["direct_song_link"]
			var path = base + link
			context.commit('play', path);
			context.state.history.push(context.state.songs[randomInt])
			context.state.player.currentSong = context.state.songs[randomInt]
		},
		previousSong (context){
			if(context.state.history.length>1){
				context.state.sound.stop();
				context.commit('load');
				var previousSong = context.state.history[context.state.history.length-2]
				var link = previousSong["direct_song_link"]
				var base = 'https://imslp.org'
				var path = base + link
				context.commit('play', path);
				context.state.player.currentSong = previousSong
				context.state.history.pop()	
			}

		},
		fetchUser (context, user) {
			if (user) {
				context.commit('setLogin', true)
				var docRef = db.collection("users").doc(user.uid)
				docRef.get().then(function(doc) {
					if (doc.exists){
						context.commit('setUser', doc.data());
						console.log(doc.data());
					} else{
						console.log("Doc not found");

					}
				}).catch(function(error){
					console.log(error);
				})
				context.commit('setUser', user)
			}
			else {
				context.commit('setLogin', false)
			}
		}
	}
});

export default store;
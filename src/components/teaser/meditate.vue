<template>
	<div>
		<div class="row animated fadeIn fast mt-3">
			<div class="col-12 text-center">
				<h2 class="font-weight-light">How long would you like to meditate for?</h2>
			</div>
		</div>
		<div class="row animated fadeIn fast mt-2">
			<div class="col text-center">
				<div class="card" v-on:click="playMusic(3)" v-bind:class="{clicked: minutes==3}">
					<h2 class="font-weight-light">3 <br />mins</h2>
				</div>
			</div>

			<div class="col text-center">
				<div class="card" v-on:click="playMusic(5)" v-bind:class="{clicked: minutes==5}">
					<h2 class="font-weight-light">5 <br />mins</h2>
				</div>
			</div>

			<div class="col text-center">
				<div class="card" v-on:click="playMusic(10)" v-bind:class="{clicked: minutes==10}">
					<h2 class="font-weight-light">10 <br />mins</h2>
				</div>
			</div>
		</div>

		<Player v-if="minutes!=null"/>

	</div>
</template>

<script>
	import Player from './player.vue'

	export default {
		components: {Player},
		name: 'Meditate',
		data: function(){
			return {
				minutes: null
			}
		},
		methods: {
			playMusic(minutes) {
				this.$store.commit('reset');
				this.minutes = minutes;
				this.$store.dispatch('initializePlayer');
			}
		}
	}
</script>
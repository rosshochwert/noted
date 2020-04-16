<template>
	<div>
		<div class="row mt-2">
			<div class="col-12 text-center">
				<h4 class="font-weight-light animated fadeIn delay-05s">Try to focus on the sound of one instrument</h4>
				<h4 class="font-weight-light animated fadeIn delay-4s">Close your eyes and listen</h4>
				<div v-on:click="togglePlaying">
					<font-awesome-icon :icon="['fas', 'pause-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPlaying"/>
					<font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin pulse class="hoverClass" v-if="this.$store.state.player.isLoading"/>
					<font-awesome-icon :icon="['fas', 'play-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPaused"/>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Player',
		data: function(){
			return {
				test: false
			}
		},
		methods: {
			togglePlaying: function(){
				this.$store.commit('togglePlaying');
			}
		}
	}
</script>

<style>
/* Animation */

.delay-05s {
  animation-delay: 0.5s;
}

.delay-15s {
  animation-delay: 1.5s;
}

/*Icons */

.fa-pause-circle:hover, .fa-play-circle:hover {
  color: #505152;
}

</style>
<template>
	<div>
		<div class="masthead">
			<div class="container">
				<div class="row intro-row">
					<div class="col-12">
						<h1 class="font-weight-light text-center animated fadeInDown">Mindfulness meditation powered by classical music {{count}}</h1>
					</div>
				</div>
				<div class="row teaser">
					<div class="col mb-2 text-center animated fadeIn delay-05s fast">
						<div class="card" v-on:click="toggleMeditate" v-bind:class="{clicked: meditate}">
							<h2 class="font-weight-light">Meditate</h2>
							<img class="img-fluid match-type-image" src="@/assets/images/meditate.svg"/>
						</div>
					</div>
					<div class="col mb-2 text-center animated fadeIn delay-05s fast">
						<div class="card" v-on:click="toggleSleep" v-bind:class="{clicked: sleep}">
							<h2 class="font-weight-light">Sleep</h2>
							<img class="img-fluid match-type-image" src="@/assets/images/sleep.svg" />
						</div>
					</div>
				</div>
				<Meditate v-if="meditate"/>
				<Sleep v-if="sleep"/>
			</div>
		</div>
		<section class="py-5">
			<div class="container">
				<h2 class="font-weight-light">What is this?</h2>
				<p>Noted is a mindfulness meditation app built on the power of classical music.</p>
			</div>
		</section>
	</div>
</template>

<script>
	import Meditate from './teaser/meditate.vue'
	import Sleep from './teaser/sleep.vue'
	export default {
		components: {Meditate, Sleep},
		name: 'Teaser',
		data: function(){
			return {
				meditate: false,
				sleep: false
			}
		},
		mounted: function(){
			
		},
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			toggleMeditate: function(){
				this.meditate=!this.meditate;	
				if (this.meditate){
					this.sleep=false;
				}
				this.$store.commit('reset');

			},
			toggleSleep: function(){
				this.sleep=!this.sleep;
				if (this.sleep){
					this.meditate=false;
				}
				this.$store.commit('reset');
			}
		}
	}
</script>

<style>
  /* Mobile */
@media (max-width: 767.98px) {
  .intro-row {
	padding-top: 30%;
  }

  .match-type-image {
	width: 75px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding: 5px;
  }
}

/* Desktop */
@media (min-width: 768px) {
.intro-row {
	padding-top: 10%;
  }

  .match-type-image {
	width: 100px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding: 5px;
  }

}

.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('~@/assets/images/homepage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.teaser {
  padding-top: 5%;
}


/* Mobile */
.card {
  background: rgba(255, 255, 255, .2);
}

.card:hover, .clicked { 
  background: rgba(255, 255, 255, .8);
}


/* Animation */

.delay-05s {
  animation-delay: 0.5s;
}

.delay-15s {
  animation-delay: 1.5s;
}
</style>
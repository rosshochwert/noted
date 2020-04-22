<template>
	<div>
		<nav class="navbar navbar-expand-sm fixed-top navbar-light" v-bind:class="{'scrolled': scrolled}" id="navbar">
			<router-link to="/"><a class="navbar-brand" href="#">Noted</a></router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link to="/meditate"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
					</li>
					<li class="nav-item active" v-if="this.$store.state.loggedIn">
						<router-link to="/library"><a class="nav-link" href="#">Library</a></router-link>
					</li>
				</ul>
				<ul class="navbar-nav" v-if="!this.$store.state.loggedIn">
					<li class="nav-item">
						<router-link to="/login"><a class="nav-link" href="#">Login</a></router-link>
					</li>
					<li class="nav-item">
						<router-link to="/signup"><a class="nav-link" href="#">Sign up</a></router-link>
					</li>
				</ul>
				<ul class="navbar-nav" v-if="this.$store.state.loggedIn">
					<li class="nav-item">
						<router-link to="/dashboard"><a class="nav-link" href="#">Dashboard</a></router-link>
					</li>
					<li class="nav-item">
						<router-link to="/dashboard"><a class="nav-link" href="#">{{this.$store.state.user.first}}</a></router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" v-on:click="logout">Logout</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>

import firebase from 'firebase'

export default {
	name: 'NavBar',
	mounted: function(){
		var distance = 50;
		window.$(window).scroll(function() {
			if ( window.$(this).scrollTop() >= distance ) {
				window.$(".navbar").addClass("scrolled");
				this.scrolled = true;
			} else {
				window.$(".navbar").removeClass("scrolled");
				this.scrolled = false;
			}
		});


	},
	data: function(){
		return {
			scrolled: false
		}
	},
	methods: {
		logout: function() {
			firebase.auth().signOut().then(() => {
				this.$router.replace('/login')
			}, function(error) {
				alert(error)
			});
		}
	}
  }
</script>

<style scoped>
.navbar {
  -webkit-transition:all 0.6s ease-out;
  -moz-transition:all 0.6s ease-out;  
  -o-transition:all 0.6s ease-out;         
  transition:all 0.6s ease-out;
}

.navbar.scrolled {
  background-color: #fff;
}
</style>
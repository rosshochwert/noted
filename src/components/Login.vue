<template>
  <div class="masthead">
    <div class="sign-up container text-center">
          <h3>Login</h3>
          <br/>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="email" 
            type="text" 
            class="form-control username" 
            placeholder="Email"
            id="inputEmail"
            required>
          <input 
            v-model="password"
            type="password" 
            class="form-control password"
            placeholder="Password" 
            required>
          <br>
          <button class="btn btn-lg btn-block btn-light" v-on:click="login">Sign in</button>
          <br />
          <h3>or</h3>
          <br />
          <router-link to="/signup"><button class="btn btn-lg btn-block btn-light">Sign up</button></router-link>
          <!-- <br />
          <h4>or</h4>
          <br />
          <div class="row">
            <div class="col">
              <button class="btn btn-lg btn-block btn-light" v-on:click="signUp">Login with Facebook</button>
            </div>
            <div class="col">
              <button class="btn btn-lg btn-block btn-light" v-on:click="signUp">Login with Google</button>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
	import firebase from 'firebase'
	export default {
		name: 'login',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login () {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
					this.$router.replace('/library')
					user
				}).catch((err) => {
					alert(err.message)
				})
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
}

/* Animation */

.delay-05s {
  animation-delay: 0.5s;
}

.delay-15s {
  animation-delay: 1.5s;
}
</style>
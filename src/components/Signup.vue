<template>
  <div class="masthead">
    <div class="sign-up container text-center">
          <h3>Create a new account</h3>
          <br/>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="first" 
            type="text" 
            class="form-control username" 
            placeholder="First name"
            id="inputFirst"
            required>
          <input
            v-model="last" 
            type="text" 
            class="form-control username" 
            placeholder="Last name"
            id="inputLast"
            required>
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
          <button class="btn btn-lg btn-block btn-light" v-on:click="signUp">Sign up</button>
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
  import { db } from '../main.js'

  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: '',
        first: '',
        last:''
      }
    },
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          console.log(user);
          db.collection('users').doc(user.user.uid).set({
            uid: user.user.uid,
            email: user.user.email,
            first: this.first,
            last: this.last,
            emailVerified: user.user.emailVerified,
            phoneNumber: user.user.phoneNumber,
            displayName: user.user.displayName,
            photoURL: user.user.photoURL
          })
          this.$router.replace('/dashboard')
        }).catch((err) => {
          alert(err.message)
        });
      }
    }
  }
</script>

<style>
  /* Mobile */
@media (max-width: 767.98px) {
  .sign-up {
    padding-top: 30%;
    max-width: 80vw
  }
}

/* Desktop */
@media (min-width: 768px) {
  .sign-up {
    padding-top: 10%;
    max-width: 50vw
  }

}

</style>
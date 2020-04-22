<template>
  <div class="masthead">
    <div class="container">
      <div class="row intro-row">
        <div class="col-12 text-center">
          <div class="text-center animated fadeIn delay-2s" v-on:click="begin" v-if="!firstInteraction">
            <button type="button" class="btn btn-outline-primary">Begin</button>
          </div>
        </div>
        <div>
          <Player/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Player from './Player.vue'
  import firebase from 'firebase'
  export default {
    name: 'login',
    components: {Player},
    mounted: function(){

    },
    data: function() {
      return {
        email: '',
        password: '',
        firstInteraction: false,
        db: firebase.firestore(),
        meditate: false,
        story: false 
      }
    },
    computed: {
      width: function(){
        return this.$store.state.player.elapsed/this.$store.state.player.length*100;
      }
    },
    methods: {
      togglePlaying: function(){
        this.$store.commit('togglePlaying');
      },
      begin: function(){
        this.firstInteraction = true;
        this.parameters = {"ross": "boss"}
        this.$store.dispatch('playSong', this.parameters)
        setInterval(function(){
          this.$store.dispatch('step')
        }.bind(this), 100)
      },
      skip30: function(){
        this.$store.dispatch('skip30')
      },
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

  .hoverClass:hover {
    color: #505152;
  }


</style>
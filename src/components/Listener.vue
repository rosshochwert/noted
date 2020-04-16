<template>
  <div class="masthead">
    <div class="container">
      <div class="row intro-row">
        <div class="col-12 text-center">
          <h4 class="font-weight-light animated fadeIn delay-05s">Try to focus on the sound of one instrument</h4>
          <h4 class="font-weight-light animated fadeIn delay-2s">Close your eyes and listen</h4>
        </div>
      </div>
    </div>
    <div class="text-center animated fadeIn delay-2s" v-on:click="begin" v-if="!firstInteraction">
      <button type="button" class="btn btn-outline-primary">Begin</button>
    </div>
    <div class="container text-center" v-if="firstInteraction">
      <div class="">
        <h4>{{this.$store.state.player.currentSong.name}}</h4>
        <h5>{{this.$store.state.player.currentSong.copyright}}</h5>
        <h5>{{this.$store.state.player.currentSong.link}}</h5>
        <h5>{{this.$store.state.player.currentSong.direct_song_link}}</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            
          </div>
        </div>
      </div>
      <font-awesome-icon :icon="['fas', 'step-backward']" size="4x" class="hoverClass" v-on:click="previousSong"/>
      <span v-on:click="togglePlaying">
        <font-awesome-icon :icon="['fas', 'pause-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPlaying"/>
        <font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin pulse class="hoverClass" v-if="this.$store.state.player.isLoading"/>
        <font-awesome-icon :icon="['fas', 'play-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPaused"/>
      </span>
      <font-awesome-icon :icon="['fas', 'step-forward']" size="4x" class="hoverClass" v-on:click="playRandomSong"/>
    </div>
  </div>
</template>

<script>
  /*import firebase from 'firebase'*/
  export default {
    name: 'login',
    mounted: function(){
      //this.$store.dispatch('playRandomSong')
    },
    data: function() {
      return {
        email: '',
        password: '',
        firstInteraction: false
      }
    },
    methods: {
      togglePlaying: function(){
        this.$store.commit('togglePlaying');
      },
      nextSong: function(){
        this.$store.commit('nextSong')
      },
      playRandomSong: function(){
        this.$store.dispatch('playRandomSong')
      },
      previousSong: function(){
        this.$store.dispatch('previousSong')
      },
      begin: function(){
        this.playRandomSong();
        this.firstInteraction = true;
        setInterval(function(){
          this.$store.dispatch('step')
        }.bind(this), 100)
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

  .hoverClass:hover {
    color: #505152;
  }


</style>
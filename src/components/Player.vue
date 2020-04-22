<template>
    <div class="container text-center">
      <font-awesome-icon :icon="['fas', 'step-backward']" size="4x" class="hoverClass" v-on:click="previousSong"/>
      <span v-on:click="togglePlaying">
        <font-awesome-icon :icon="['fas', 'pause-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPlaying"/>
        <font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin pulse class="hoverClass" v-if="this.$store.state.player.isLoading"/>
        <font-awesome-icon :icon="['fas', 'play-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPaused"/>
      </span>
      <font-awesome-icon :icon="['fas', 'step-forward']" size="4x" class="hoverClass" v-on:click="playRandomSong"/>
      <font-awesome-icon :icon="['fas', 'step-forward']" size="4x" class="hoverClass" v-on:click="skip30"/>
    </div>
</template>

<script>
  export default {
    name: 'login',
    mounted: function(){

    },
    data: function() {
      return {
        firstInteraction: false,
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
      nextSong: function(){
        this.$store.commit('nextSong')
      },
      playRandomSong: function(){
        this.$store.dispatch('playRandomSong')
        this.getDuration(this.$store.state.player.elapsed)
      },
      previousSong: function(){
        this.$store.dispatch('previousSong')
      },
      skip30: function(){
        this.$store.dispatch('skip30')
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
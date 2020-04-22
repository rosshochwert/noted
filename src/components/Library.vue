<template>
  <div class="masthead">
    <div class="container intro-row">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(song, index) in songs" :key="song.id">
            <div class="row">
              <div class="col-6">
                <span>Title: {{song.title}}</span>
                <br/>
                <span>Composer: {{song.name}}</span>
              </div>
              <div class="col-6">
                <span>
                  <font-awesome-icon :icon="['fas', 'pause-circle']" size="3x" class="hoverClass" v-on:click="togglePlaying" v-if="$store.state.player.isPlaying && $store.state.player.currentSong.firestore_link==song.firestore_link" />
                  <font-awesome-icon :icon="['fas', 'spinner']" size="3x" spin pulse class="hoverClass" v-if="$store.state.player.isLoading && $store.state.player.currentSong.firestore_link==song.firestore_link"/>
                  <font-awesome-icon :icon="['fas', 'play-circle']" size="3x" class="hoverClass" v-on:click="playSong(index)" v-if="$store.state.player.currentSong.firestore_link!=song.firestore_link || ($store.state.player.currentSong.firestore_link==song.firestore_link && $store.state.player.isPaused)"/>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '../db.js'
  export default {
    name: 'login',
    mounted: function(){

    },
    data: function() {
      return {
        songs: [],
        ready: false
      }
    },
    firestore:{
      songs: db.collection('songs')
    },
    computed: {
      width: function(){
        return this.$store.state.player.elapsed/this.$store.state.player.length*100;
      }
    },
    methods: {
      playSong: function(index){
        console.log(index)
        var song = this.songs[index]
        if(song.firestore_link==this.$store.state.player.currentSong.firestore_link){
          this.$store.commit('togglePlaying')
        } else {
          this.$store.dispatch('playSong', song)
          setInterval(function(){
            this.$store.dispatch('step')
          }.bind(this), 100)
        }
      },
      togglePlaying: function(){
        this.$store.commit('togglePlaying')
        console.log(this.$store.state.player.currentSong.firestore_link)
      },
      skip30: function(){
        this.$store.dispatch('skip30')
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


</style>
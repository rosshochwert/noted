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
        <h5 v-for="(value, propertyName) in this.$store.state.player.currentSong" v-bind:key="propertyName">
          {{propertyName}}: {{value}}
        </h5>
        <span>{{this.$store.state.player.elapsed | convertTime}}</span>
        <div class="progress" style="height: 10px;">
          <div class="progress-bar" role="progressbar" :style="{width: width + '%'}"></div>
        </div>
        <span>{{this.$store.state.player.length | convertTime}}</span>

        
        
      </div>
      <font-awesome-icon :icon="['fas', 'step-backward']" size="4x" class="hoverClass" v-on:click="previousSong"/>
      <span v-on:click="togglePlaying">
        <font-awesome-icon :icon="['fas', 'pause-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPlaying"/>
        <font-awesome-icon :icon="['fas', 'spinner']" size="4x" spin pulse class="hoverClass" v-if="this.$store.state.player.isLoading"/>
        <font-awesome-icon :icon="['fas', 'play-circle']" size="4x" class="hoverClass" v-if="this.$store.state.player.isPaused"/>
      </span>
      <font-awesome-icon :icon="['fas', 'step-forward']" size="4x" class="hoverClass" v-on:click="playRandomSong"/>
      <font-awesome-icon :icon="['fas', 'step-forward']" size="4x" class="hoverClass" v-on:click="skip30"/>
      <br>
      <div class="saveFile">
        <div id='example-3'>
          <input type="checkbox" id="meditate" v-model="meditate">
          <label for="meditate">Meditation</label>
          <input type="checkbox" id="story" v-model="story">
          <label for="story">Story</label>
        </div>
        <button type="button" class="btn btn-outline-primary" v-on:click="saveSong">Save</button>

      </div>
    </div>
    <div class="container">
      <div v-for="song in songs" :key="song.id">
        <span>{{song.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '../db.js'
  export default {
    name: 'login',
    mounted: function(){
      //this.$store.dispatch('playRandomSong')
    },
    data: function() {
      return {
        email: '',
        password: '',
        firstInteraction: false,
        meditate: false,
        story: false,
        songs: []
      }
    },
    firestore: {
      songs: db.collection('songs')
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
      },
      skip30: function(){
        this.$store.dispatch('skip30')
      },
      saveSong: function(){
        db.collection("songs").add({
            "name": this.$store.state.player.currentSong.name,
            "title": this.$store.state.player.currentSong.title,
            "instrumentation": this.$store.state.player.currentSong.instrumentation,
            "piece_style": this.$store.state.player.currentSong.piece_style,
            "first_publication": this.$store.state.player.currentSong.first_publication,
            "imslp_link": this.$store.state.player.currentSong.imslp_link,
            "performer": this.$store.state.player.currentSong.performer,
            "publisher": this.$store.state.player.currentSong.publisher,
            "copyright": this.$store.state.player.currentSong.copyright,
            "direct_song_link": this.$store.state.player.currentSong.direct_song_link,
            "imsl_id": this.$store.state.player.currentSong.imsl_id,
            "duration": this.$store.state.player.length,
            "type": {
                "meditate": this.meditate,
                "story": this.story
            }
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
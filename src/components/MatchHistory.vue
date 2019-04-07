<template>
    <div>
        <div class="container" v-if="matches && matches.length">
            <div class="card card-content" v-for="(match,index) in matches.slice(0,matchToShow)" v-bind:key="match.id">
            <div class="row">
            <playermatchinfo  :user_Id="matches[index].player1_id" :deck_Id="matches[index].player1_deck_id" :winner_Id="matches[index].winner_id"></playermatchinfo>
            <playermatchinfo  :user_Id="matches[index].player2_id" :deck_Id="matches[index].player2_deck_id" :winner_Id="matches[index].winner_id"></playermatchinfo>
            </div>
            <p>Match status : <strong>{{match.status}}</strong></p>
            <p>Winner id : {{match.winner_id}}</p>
            <p>Date : {{match.updated_at}}</p>
            <!-- <playermatchinfo :user_Id="match.player1_id" ,:deck_id="match.player1_deck_id"></playermatchinfo>
            <playermatchinfo :user_Id="match.player2_id" ,:deck_id="match.player2_deck_id"></playermatchinfo>-->
            </div>
        </div>
        <div v-if="matchToShow<matches.length" >
        <button class="btn btn-primary" @click="matchToShow += 10">show previous matches...</button>
        </div>
        <ul v-if="errors && errors.length">
          <li v-for="error of errors" v-bind:key="error.id">{{error.message}}</li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
import playermatchinfo from './PlayerInfo.vue'
import axios from 'axios'
export default {
  name: 'match',
  components: {
    playermatchinfo
  },
  data () {
    return {
      matches: [],
      errors: [],
      player_info: [],
      matchToShow: 10
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get(`https://api.loom.games/zb/v1/matches?status=Ended&page=17`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.matches = response.data.matches
      })
      .catch(e => {
        this.errors.push(e)
      }),

    axios.get(`https://api.loom.games/zb/v1/matches?status=Ended&page=16`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.matches = this.matches.concat(response.data.matches)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  beforeDestroy () {
    this.matches = 10
  }
}
</script>

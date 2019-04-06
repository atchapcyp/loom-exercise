<template>
    <div>
        <ul v-if="matches && matches.length">
            <li v-for="match of matches" v-bind:key="match.id">
            <p><strong>{{match.status}}</strong></p>
            <p>{{match.winner_id}}</p>
            </li>
        </ul>
        <ul v-if="errors && errors.length">
            <li v-for="error of errors" v-bind:key="error.id">
            {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'match',
  data () {
    return {
      matches: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get(`https://api.loom.games/zb/v1/matches?status=Ended`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.matches = response.data.matches
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

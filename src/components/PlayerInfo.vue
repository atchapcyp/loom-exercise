<template>
<div class="col-6" style="background-color:lightgreen" v-if="user_Id==winner_Id">
    <h6>Deck name : {{player_info[player_info.length-1].name}} {{ updateProduct }}</h6>
     <img :src="image" height="42" width="63">
    <h6>Primary Skill : {{player_info[player_info.length-1].primary_skill_id}}</h6>
    <h6>Secondary Skill : {{player_info[player_info.length-1].secondary_skill_id}}</h6>
</div>
<div class="col-6" style="background-color:red" v-else>
    <h6>Deck name : {{player_info[player_info.length-1].name}} {{ updateProduct }}</h6>
     <img :src="image" height="42" width="63">
    <h6>Primary Skill : {{player_info[player_info.length-1].primary_skill_id}}</h6>
    <h6>Secondary Skill : {{player_info[player_info.length-1].secondary_skill_id}}</h6>
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'playerinfo',
  props: {
    user_Id: String,
    deck_Id: String,
    winner_Id: String
  },
  data () {
    return {
      player_info: [],
      selectedVariant:0,
      variants: [
          {
            variantId: 0,
            variantName: "AirHero",
            variantImage:  'https://zombiebattleground.io/images/5/53/AirHero.png',  
          },
          {
            variantId: 1,
            variantName: "EarthHero",
            variantImage:  'https://zombiebattleground.io/images/e/e2/EarthHero.png',  
          },
          {
            variantId: 2,
            variantName: "FireHero",
            variantImage:  'https://zombiebattleground.io/images/f/f3/FireHero.png',  
          },
          {
            variantId: 3,
            variantName: "LifeHero",
            variantImage:  'https://zombiebattleground.io/images/4/41/LifeHero.png',  
          },
          {
            variantId: 4,
            variantName: "ToxicHero",
            variantImage:  'https://zombiebattleground.io/images/c/cb/ToxicHero.png',  
          },
          {
            variantId: 5,
            variantName: "WaterHero",
            variantImage:  'https://zombiebattleground.io/images/5/54/WaterHero.png',  
          },
        ],
    }
  },
  // Fetches posts when the component is created.
  created () {
    axios.get('https://api.loom.games/zb/v1/decks',{
        params: {
        user_id:this.$props.user_Id,
        deck_id: this.$props.deck_Id
    }})
      .then(response => {
      // JSON responses are automatically parsed.
        this.player_info = response.data.decks
      })
  },
  beforeMount () {
    this.selectedVariant=player_info[0].hero_id
  },
  computed: {
      updateProduct: function() {  
          this.selectedVariant = this.player_info[0].hero_id
      },
        image(){
            return this.variants[this.selectedVariant].variantImage
        }
    }
}
</script>


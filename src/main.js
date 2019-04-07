// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
/* eslint-disable */


Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
    render: h => h(App),
  // mounted () {
  //   axios
  //     .get('https://api.loom.games/zb/v1/matches')
  //     .then(response => (this.info = response.data.matches))
  // }
})

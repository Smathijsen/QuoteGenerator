import Vue from 'vue'
import App from './App.vue'

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
new Vue({
  el: '#app',
  render: h => h(App)
})

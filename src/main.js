import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Quote from './components/Quote.vue'


// Vue.component('app-quote', Quote);
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
new Vue({
  el: '#app',
  render: h => h(App)
})

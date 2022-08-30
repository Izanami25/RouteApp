import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqT36KqM02cWNRenECsf143h9qn8pRYC8',
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
 
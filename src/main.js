import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);


Vue.config.productionTip = false

Vue.prototype.$urls = {"p2oa": "https://services.aeris-data.fr/p2oa/dmp/v1_0/get"}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import Logan from "./plugins/logan";

Vue.config.productionTip = false;
Vue.prototype.Logan = new Logan();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './components/App.vue';
import { router } from './router/router.js'

import Vuex from 'vuex';
Vue.use(Vuex);

import { store } from './store/store.js';


const app = new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  render: h => h(App)
});

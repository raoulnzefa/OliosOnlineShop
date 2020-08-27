import Vue from 'vue';
import VueClosable from 'vue-closable';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueClosable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

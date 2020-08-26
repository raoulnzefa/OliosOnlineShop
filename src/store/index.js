import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav: [
      {
        url: '/',
        iconName: 'home.png',
        activeLinkIconName: 'home-active.png'
      },
      {
        url: '/cart',
        iconName: 'cart.png',
        activeLinkIconName: 'cart-active.png'
      },
      {
        url: '/search',
        iconName: 'search.png',
        activeLinkIconName: 'search-active.png'
      }
    ]
  },
  getters: {
    nav(state) {
      return state.nav;
    }
  },
  mutations: {
  },
  actions: {
  }
});

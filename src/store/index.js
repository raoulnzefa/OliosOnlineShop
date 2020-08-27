import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavCategoriesOpen: false,
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
    ],
    categories: [
      {
        name: 'Living room',
        iconName: 'living-room.png',
        activeLinkIconName: 'living-room-active.png'
      },
      {
        name: 'Office',
        iconName: 'office.png',
        activeLinkIconName: 'office-active.png'
      },
      {
        name: 'For kids',
        iconName: 'for-kids.png',
        activeLinkIconName: 'for-kids-active.png'
      },
      {
        name: 'Kitchen',
        iconName: 'kitchen.png',
        activeLinkIconName: 'kitchen-active.png'
      },
      {
        name: 'Accesories',
        iconName: 'accesories.png',
        activeLinkIconName: 'accesories-active.png'
      },
      {
        name: 'Appliances',
        iconName: 'appliances.png',
        activeLinkIconName: 'appliances-active.png'
      },
      {
        name: 'Plants',
        iconName: 'plants.png',
        activeLinkIconName: 'plants-active.png'
      }
    ]
  },
  getters: {
    nav(state) {
      return state.nav;
    },
    categories(state) {
      return state.categories;
    },
    isNavCategoriesOpen(state) {
      return state.isNavCategoriesOpen;
    }
  },
  mutations: {
    showCategoriesNav(state) {
      state.isNavCategoriesOpen = true;
    },
    hideCategoriesNav(state) {
      state.isNavCategoriesOpen = false;
    },
  },
  actions: {
    showCategoriesNav(store) {
      store.commit('showCategoriesNav');
    },
    hideCategoriesNav(store) {
      store.commit('hideCategoriesNav');
    },
  }
});

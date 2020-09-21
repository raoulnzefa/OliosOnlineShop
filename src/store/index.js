import Vue from 'vue';
import Vuex from 'vuex';

import data from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavCategoriesOpen: false,
    nav: [
      {
        url: '/',
        iconName: 'nav/home.png',
        activeLinkIconName: 'nav/home-active.png'
      },
      {
        url: '/cart',
        iconName: 'nav/cart.png',
        activeLinkIconName: 'nav/cart-active.png'
      },
      {
        url: '/search',
        iconName: 'nav/search.png',
        activeLinkIconName: 'nav/search-active.png'
      }
    ],
    categories: [],
    cart: []
  },
  getters: {
    productInCart(state) {
      return id => state.cart.filter(product => product.id === id)[0];
    },
    nav(state) {
      return state.nav;
    },
    categories(state) {
      return state.categories;
    },
    isNavCategoriesOpen(state) {
      return state.isNavCategoriesOpen;
    },
    products(state) {
      return category => state.products.filter(prodList => prodList.category === category)[0];
    },
    product(state) {
      return id => state.products
        .map(productList => productList.products
          .filter(product => product.id === id)).filter(arr => arr.length !== 0)[0][0];
    },
    categoryIconName(state) {
      return categoryName => state.categories.filter(category => category.name === categoryName)[0]
        .iconName;
    },
    productDiscountPercent(state) {
      return state.productDiscountPercent;
    },
    productsDescription(state) {
      return state.productsDescription;
    }
  },
  mutations: {
    loadData(state, payload) {
      payload.forEach(category => state.categories.push(category));
    },
    showCategoriesNav(state) {
      state.isNavCategoriesOpen = true;
    },
    hideCategoriesNav(state) {
      state.isNavCategoriesOpen = false;
    },
    addToCart(state, payload) {
      let hasAlready = false;

      state.cart.forEach(product => {
        if(product.id === payload.id) {
          product.quantity += payload.quantity;
          hasAlready = true;
        }
      });

      if(!hasAlready) {
        state.cart.push(payload);
      }
    }
  },
  actions: {
    loadData(store) {
      store.commit('loadData', data);
    },
    showCategoriesNav(store) {
      store.commit('showCategoriesNav');
    },
    hideCategoriesNav(store) {
      store.commit('hideCategoriesNav');
    },
    addToCart(store, payload) {
      store.commit('addToCart', payload);
    }
  }
});

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
        name: 'living room',
        iconName: 'living-room.png',
        activeLinkIconName: 'living-room-active.png'
      },
      {
        name: 'office',
        iconName: 'office.png',
        activeLinkIconName: 'office-active.png'
      },
      {
        name: 'for kids',
        iconName: 'for-kids.png',
        activeLinkIconName: 'for-kids-active.png'
      },
      {
        name: 'kitchen',
        iconName: 'kitchen.png',
        activeLinkIconName: 'kitchen-active.png'
      },
      {
        name: 'accesories',
        iconName: 'accesories.png',
        activeLinkIconName: 'accesories-active.png'
      },
      {
        name: 'appliances',
        iconName: 'appliances.png',
        activeLinkIconName: 'appliances-active.png'
      },
      {
        name: 'plants',
        iconName: 'plants.png',
        activeLinkIconName: 'plants-active.png'
      }
    ],
    products: [
      {
        category: 'living room',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair pink',
            description: 'Product description',
            img: 'chair-pink.jpg',
            price: 45
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa pink gray',
            description: 'Product description',
            img: 'sofa-pink-gray.jpg',
            price: 375
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk',
            description: 'Product description',
            img: 'computer-desk.jpg',
            price: 125
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair white ',
            description: 'Product description',
            img: 'chair-white.jpg',
            price: 50
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk white',
            description: 'Product description',
            img: 'computer-desk-white.jpg',
            price: 115
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Bed gray',
            description: 'Product description',
            img: 'bed-gray.jpg',
            price: 400
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair light gray',
            description: 'Product description',
            img: 'chair-light-gray.jpg',
            price: 60
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa gray',
            description: 'Product description',
            img: 'sofa-gray.jpg',
            price: 299
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair gray',
            description: 'Product description',
            img: 'chair-gray.jpg',
            price: 90
          }
        ]
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
    },
    products(state) {
      return category => state.products.filter(prodList => prodList.category === category)[0];
    },
    categoryIconName(state) {
      return categoryName => state.categories.filter(category => category.name === categoryName)[0]
        .iconName;
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

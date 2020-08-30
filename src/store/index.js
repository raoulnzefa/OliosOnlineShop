import Vue from 'vue';
import Vuex from 'vuex';

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
    categories: [
      {
        name: 'living room',
        iconName: 'categories/living-room.png',
        activeLinkIconName: 'categories/living-room-active.png'
      },
      {
        name: 'office',
        iconName: 'categories/office.png',
        activeLinkIconName: 'categories/office-active.png'
      },
      {
        name: 'for kids',
        iconName: 'categories/for-kids.png',
        activeLinkIconName: 'categories/for-kids-active.png'
      },
      {
        name: 'kitchen',
        iconName: 'categories/kitchen.png',
        activeLinkIconName: 'categories/kitchen-active.png'
      },
      {
        name: 'accesories',
        iconName: 'categories/accesories.png',
        activeLinkIconName: 'categories/accesories-active.png'
      },
      {
        name: 'appliances',
        iconName: 'categories/appliances.png',
        activeLinkIconName: 'categories/appliances-active.png'
      },
      {
        name: 'plants',
        iconName: 'categories/plants.png',
        activeLinkIconName: 'categories/plants-active.png'
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
            img: 'products/living-room/chair-pink.jpg',
            price: 45
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa pink gray',
            description: 'Product description',
            img: 'products/living-room/sofa-pink-gray.jpg',
            price: 375
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk',
            description: 'Product description',
            img: 'products/living-room/computer-desk.jpg',
            price: 125
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair white ',
            description: 'Product description',
            img: 'products/living-room/chair-white.jpg',
            price: 50
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk white',
            description: 'Product description',
            img: 'products/living-room/computer-desk-white.jpg',
            price: 115
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Bed gray',
            description: 'Product description',
            img: 'products/living-room/bed-gray.jpg',
            price: 400
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair light gray',
            description: 'Product description',
            img: 'products/living-room/chair-light-gray.jpg',
            price: 60
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa gray',
            description: 'Product description',
            img: 'products/living-room/sofa-gray.jpg',
            price: 299
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair gray',
            description: 'Product description',
            img: 'products/living-room/chair-gray.jpg',
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

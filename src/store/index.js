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
        name: 'devices',
        iconName: 'categories/devices.png',
        activeLinkIconName: 'categories/devices-active.png'
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
            name: 'Chair 1',
            description: 'Product description',
            img: 'products/living-room/chair1.jpg',
            price: 45
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa 1',
            description: 'Product description',
            img: 'products/living-room/sofa1.jpg',
            price: 375
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk 1',
            description: 'Product description',
            img: 'products/living-room/computer-desk1.jpg',
            price: 125
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair 2',
            description: 'Product description',
            img: 'products/living-room/chair2.jpg',
            price: 50
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Computer desk 2',
            description: 'Product description',
            img: 'products/living-room/computer-desk2.jpg',
            price: 115
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Bed',
            description: 'Product description',
            img: 'products/living-room/bed.jpg',
            price: 400
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair 3',
            description: 'Product description',
            img: 'products/living-room/chair3.jpg',
            price: 60
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa 2',
            description: 'Product description',
            img: 'products/living-room/sofa2.jpg',
            price: 299
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair 4',
            description: 'Product description',
            img: 'products/living-room/chair4.jpg',
            price: 90
          }
        ]
      },
      {
        category: 'office',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair 1',
            description: 'Product description',
            img: 'products/office/chair1.jpg',
            price: 130
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Sofa',
            description: 'Product description',
            img: 'products/office/sofa.jpg',
            price: 255
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Desk 1',
            description: 'Product description',
            img: 'products/office/desk1.png',
            price: 400
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Safe',
            description: 'Product description',
            img: 'products/office/safe.jpg',
            price: 190
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Chair 2',
            description: 'Product description',
            img: 'products/office/chair2.jpg',
            price: 130
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Desk 3',
            description: 'Product description',
            img: 'products/office/desk3.jpg',
            price: 300
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Desk 2',
            description: 'Product description',
            img: 'products/office/desk2.jpg',
            price: 260
          }
        ]
      },
      {
        category: 'for kids',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Lego 1',
            description: 'Product description',
            img: 'products/for-kids/lego1.jpg',
            price: 100
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Helicopter',
            description: 'Product description',
            img: 'products/for-kids/helicopter.jpg',
            price: 150
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Car 1',
            description: 'Product description',
            img: 'products/for-kids/car1.jpg',
            price: 140
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Car 2',
            description: 'Product description',
            img: 'products/for-kids/car2.jpg',
            price: 155
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Lego 2',
            description: 'Product description',
            img: 'products/for-kids/lego2.jpg',
            price: 115
          }
        ]
      },
      {
        category: 'kitchen',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Coffee machine1',
            description: 'Product description',
            img: 'products/kitchen/coffee-machine1.jpg',
            price: 330
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Table',
            description: 'Product description',
            img: 'products/kitchen/table.jpg',
            price: 100
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Refrigerator',
            description: 'Product description',
            img: 'products/kitchen/refrigerator.jpg',
            price: 630
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Electric oven',
            description: 'Product description',
            img: 'products/kitchen/electric-oven1.jpg',
            price: 400
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Grill',
            description: 'Product description',
            img: 'products/kitchen/grill.jpg',
            price: 399
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Double boiler',
            description: 'Product description',
            img: 'products/kitchen/double-boiler.jpg',
            price: 270
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Multicooker1',
            description: 'Product description',
            img: 'products/kitchen/multicooker1.jpg',
            price: 450
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Electric kettle',
            description: 'Product description',
            img: 'products/kitchen/electric-kettle.jpg',
            price: 75
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Cooler',
            description: 'Product description',
            img: 'products/kitchen/cooler.jpg',
            price: 180
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Multicooker2',
            description: 'Product description',
            img: 'products/kitchen/multicooker2.jpg',
            price: 430
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Electric Oven 2',
            description: 'Product description',
            img: 'products/kitchen/electric-oven2.jpg',
            price: 410
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Coffee machine 2',
            description: 'Product description',
            img: 'products/kitchen/coffee-machine2.jpg',
            price: 300
          }
        ]
      },
      {
        category: 'accesories',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Lamp',
            description: 'Product description',
            img: 'products/accesories/lamp.jpg',
            price: 50
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Art 1',
            description: 'Product description',
            img: 'products/accesories/art1.jpg',
            price: 130
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Clock 2',
            description: 'Product description',
            img: 'products/accesories/clock2.jpg',
            price: 75
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Art 2',
            description: 'Product description',
            img: 'products/accesories/art2.jpg',
            price: 140
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Clock 1',
            description: 'Product description',
            img: 'products/accesories/clock1.png',
            price: 70
          },
        ]
      },
      {
        category: 'devices',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'TV 1',
            description: 'Product description',
            img: 'products/devices/tv1.jpg',
            price: 270
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'TV 2',
            description: 'Product description',
            img: 'products/devices/tv2.jpg',
            price: 300
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'TV 3',
            description: 'Product description',
            img: 'products/devices/tv3.jpg',
            price: 290
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'PS 5',
            description: 'Product description',
            img: 'products/devices/playstation.jpg',
            price: 315
          }
        ]
      },
      {
        category: 'plants',
        products: [
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 1',
            description: 'Product description',
            img: 'products/plants/plant1.jpg',
            price: 25
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 2',
            description: 'Product description',
            img: 'products/plants/plant2.jpg',
            price: 30
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 3',
            description: 'Product description',
            img: 'products/plants/plant3.jpg',
            price: 25
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 4',
            description: 'Product description',
            img: 'products/plants/plant4.jpg',
            price: 33
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 5',
            description: 'Product description',
            img: 'products/plants/plant5.jpg',
            price: 35
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 6',
            description: 'Product description',
            img: 'products/plants/plant6.jpg',
            price: 27
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 7',
            description: 'Product description',
            img: 'products/plants/plant7.jpg',
            price: 30
          },
          {
            id: Math.floor(Math.random() * 90000) + 10000,
            name: 'Plant 8',
            description: 'Product description',
            img: 'products/plants/plant8.jpg',
            price: 25
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

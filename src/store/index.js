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
            id: 96194,
            name: 'Chair 1',
            description: 'Product description',
            img: 'products/living-room/chair1.jpg',
            price: 45,
            likes: 573
          },
          {
            id: 75530,
            name: 'Sofa 1',
            description: 'Product description',
            img: 'products/living-room/sofa1.jpg',
            price: 375,
            likes: 195
          },
          {
            id: 50849,
            name: 'Computer desk 1',
            description: 'Product description',
            img: 'products/living-room/computer-desk1.jpg',
            price: 125,
            likes: 198
          },
          {
            id: 87250,
            name: 'Chair 2',
            description: 'Product description',
            img: 'products/living-room/chair2.jpg',
            price: 50,
            likes: 175
          },
          {
            id: 81209,
            name: 'Computer desk 2',
            description: 'Product description',
            img: 'products/living-room/computer-desk2.jpg',
            price: 115,
            likes: 367
          },
          {
            id: 44160,
            name: 'Bed',
            description: 'Product description',
            img: 'products/living-room/bed.jpg',
            price: 400,
            likes: 1182
          },
          {
            id: 74790,
            name: 'Chair 3',
            description: 'Product description',
            img: 'products/living-room/chair3.jpg',
            price: 60,
            likes: 498
          },
          {
            id: 19608,
            name: 'Sofa 2',
            description: 'Product description',
            img: 'products/living-room/sofa2.jpg',
            price: 299,
            likes: 106
          },
          {
            id: 85241,
            name: 'Chair 4',
            description: 'Product description',
            img: 'products/living-room/chair4.jpg',
            price: 90,
            likes: 489
          }
        ]
      },
      {
        category: 'office',
        products: [
          {
            id: 73444,
            name: 'Chair 1',
            description: 'Product description',
            img: 'products/office/chair1.jpg',
            price: 130,
            likes: 798
          },
          {
            id: 86661,
            name: 'Sofa',
            description: 'Product description',
            img: 'products/office/sofa.jpg',
            price: 255,
            likes: 484
          },
          {
            id: 73224,
            name: 'Desk 1',
            description: 'Product description',
            img: 'products/office/desk1.png',
            price: 400,
            likes: 492
          },
          {
            id: 92102,
            name: 'Safe',
            description: 'Product description',
            img: 'products/office/safe.jpg',
            price: 190,
            likes: 361
          },
          {
            id: 67817,
            name: 'Chair 2',
            description: 'Product description',
            img: 'products/office/chair2.jpg',
            price: 130,
            likes: 854
          },
          {
            id: 15106,
            name: 'Desk 3',
            description: 'Product description',
            img: 'products/office/desk3.jpg',
            price: 300,
            likes: 944
          },
          {
            id: 73980,
            name: 'Desk 2',
            description: 'Product description',
            img: 'products/office/desk2.jpg',
            price: 260,
            likes: 584
          }
        ]
      },
      {
        category: 'for kids',
        products: [
          {
            id: 56969,
            name: 'Lego 1',
            description: 'Product description',
            img: 'products/for-kids/lego1.jpg',
            price: 100,
            likes: 480
          },
          {
            id: 24789,
            name: 'Helicopter',
            description: 'Product description',
            img: 'products/for-kids/helicopter.jpg',
            price: 150,
            likes: 358
          },
          {
            id: 65175,
            name: 'Car 1',
            description: 'Product description',
            img: 'products/for-kids/car1.jpg',
            price: 140,
            likes: 112
          },
          {
            id: 66191,
            name: 'Car 2',
            description: 'Product description',
            img: 'products/for-kids/car2.jpg',
            price: 155,
            likes: 488
          },
          {
            id: 31195,
            name: 'Lego 2',
            description: 'Product description',
            img: 'products/for-kids/lego2.jpg',
            price: 115,
            likes: 1569
          }
        ]
      },
      {
        category: 'kitchen',
        products: [
          {
            id: 48637,
            name: 'Coffee machine1',
            description: 'Product description',
            img: 'products/kitchen/coffee-machine1.jpg',
            price: 330,
            likes: 1587
          },
          {
            id: 87990,
            name: 'Table',
            description: 'Product description',
            img: 'products/kitchen/table.jpg',
            price: 100,
            likes: 958
          },
          {
            id: 20490,
            name: 'Refrigerator',
            description: 'Product description',
            img: 'products/kitchen/refrigerator.jpg',
            price: 630,
            likes: 468
          },
          {
            id: 20412,
            name: 'Electric oven',
            description: 'Product description',
            img: 'products/kitchen/electric-oven1.jpg',
            price: 400,
            likes: 587
          },
          {
            id: 29937,
            name: 'Grill',
            description: 'Product description',
            img: 'products/kitchen/grill.jpg',
            price: 399,
            likes: 684
          },
          {
            id: 59853,
            name: 'Double boiler',
            description: 'Product description',
            img: 'products/kitchen/double-boiler.jpg',
            price: 270,
            likes: 785
          },
          {
            id: 28592,
            name: 'Multicooker1',
            description: 'Product description',
            img: 'products/kitchen/multicooker1.jpg',
            price: 450,
            likes: 128
          },
          {
            id: 19440,
            name: 'Electric kettle',
            description: 'Product description',
            img: 'products/kitchen/electric-kettle.jpg',
            price: 75,
            likes: 895
          },
          {
            id: 10956,
            name: 'Cooler',
            description: 'Product description',
            img: 'products/kitchen/cooler.jpg',
            price: 180,
            likes: 968
          },
          {
            id: 45822,
            name: 'Multicooker2',
            description: 'Product description',
            img: 'products/kitchen/multicooker2.jpg',
            price: 430,
            likes: 2481
          },
          {
            id: 75942,
            name: 'Electric Oven 2',
            description: 'Product description',
            img: 'products/kitchen/electric-oven2.jpg',
            price: 410,
            likes: 488
          },
          {
            id: 36734,
            name: 'Coffee machine 2',
            description: 'Product description',
            img: 'products/kitchen/coffee-machine2.jpg',
            price: 300,
            likes: 483
          }
        ]
      },
      {
        category: 'accesories',
        products: [
          {
            id: 87301,
            name: 'Lamp',
            description: 'Product description',
            img: 'products/accesories/lamp.jpg',
            price: 50,
            likes: 479
          },
          {
            id: 59926,
            name: 'Art 1',
            description: 'Product description',
            img: 'products/accesories/art1.jpg',
            price: 130,
            likes: 814
          },
          {
            id: 74743,
            name: 'Clock 2',
            description: 'Product description',
            img: 'products/accesories/clock2.jpg',
            price: 75,
            likes: 312
          },
          {
            id: 94090,
            name: 'Art 2',
            description: 'Product description',
            img: 'products/accesories/art2.jpg',
            price: 140,
            likes: 518
          },
          {
            id: 66424,
            name: 'Clock 1',
            description: 'Product description',
            img: 'products/accesories/clock1.png',
            price: 70,
            likes: 129
          },
        ]
      },
      {
        category: 'devices',
        products: [
          {
            id: 91034,
            name: 'TV 1',
            description: 'Product description',
            img: 'products/devices/tv1.jpg',
            price: 270,
            likes: 579
          },
          {
            id: 32021,
            name: 'TV 2',
            description: 'Product description',
            img: 'products/devices/tv2.jpg',
            price: 300,
            likes: 347
          },
          {
            id: 41528,
            name: 'TV 3',
            description: 'Product description',
            img: 'products/devices/tv3.jpg',
            price: 290,
            likes: 589
          },
          {
            id: 30241,
            name: 'PS 5',
            description: 'Product description',
            img: 'products/devices/playstation.jpg',
            price: 315,
            likes: 147
          }
        ]
      },
      {
        category: 'plants',
        products: [
          {
            id: 51156,
            name: 'Plant 1',
            description: 'Product description',
            img: 'products/plants/plant1.jpg',
            price: 25,
            likes: 1589
          },
          {
            id: 34192,
            name: 'Plant 2',
            description: 'Product description',
            img: 'products/plants/plant2.jpg',
            price: 30,
            likes: 495
          },
          {
            id: 99758,
            name: 'Plant 3',
            description: 'Product description',
            img: 'products/plants/plant3.jpg',
            price: 25,
            likes: 200
          },
          {
            id: 98811,
            name: 'Plant 4',
            description: 'Product description',
            img: 'products/plants/plant4.jpg',
            price: 33,
            likes: 587
          },
          {
            id: 95180,
            name: 'Plant 5',
            description: 'Product description',
            img: 'products/plants/plant5.jpg',
            price: 35,
            likes: 954
          },
          {
            id: 96105,
            name: 'Plant 6',
            description: 'Product description',
            img: 'products/plants/plant6.jpg',
            price: 27,
            likes: 348
          },
          {
            id: 40638,
            name: 'Plant 7',
            description: 'Product description',
            img: 'products/plants/plant7.jpg',
            price: 30,
            likes: 852
          },
          {
            id: 68626,
            name: 'Plant 8',
            description: 'Product description',
            img: 'products/plants/plant8.jpg',
            price: 25,
            likes: 179
          }
        ]
      }
    ],
    productDiscountPercent: 10,
    productsDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut fermentum interdum malesuada. Sed ornare posuere.`,
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

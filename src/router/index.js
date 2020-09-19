import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Search from '../views/Search.vue';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:category/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

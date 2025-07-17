import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Landing from '../components/Landing.vue';
import Products from '../components/Products.vue'; 
import Cart from '../components/Cart.vue'; 
import Login from '../components/Login.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue');
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

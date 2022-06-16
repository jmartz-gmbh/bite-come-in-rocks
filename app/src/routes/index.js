import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Drinks from '../pages/drinks.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/drinks', component: Drinks },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
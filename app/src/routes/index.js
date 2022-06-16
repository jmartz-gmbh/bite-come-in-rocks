import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Gallery from '../pages/gallery.vue';
import GalleryCategory from '../pages/gallery/category.vue';
import GalleryView from '../pages/gallery/view.vue';
import Drinks from '../pages/drinks.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/category/:id', component: GalleryCategory},
  { path: '/gallery/view/:id', component: GalleryView},
  { path: '/drinks', component: Drinks },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
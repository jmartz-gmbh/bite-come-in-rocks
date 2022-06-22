import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Gallery from '../pages/gallery.vue';
import GalleryCategory from '../pages/gallery/category.vue';
import GalleryView from '../pages/gallery/view.vue';
import Drinks from '../pages/drinks.vue';
import Events from '../pages/events.vue';
import Djs from '../pages/djs.vue';
import Admin from '../pages/admin.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/impressum', component: Impressum },
  { path: '/djs', component: Djs },
  { path: '/events', component: Events },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/category/:id', component: GalleryCategory},
  { path: '/gallery/view/:id', component: GalleryView},
  { path: '/drinks', component: Drinks },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
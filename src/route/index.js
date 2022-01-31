import Vue from 'vue';
import VueRouter from 'vue-router';

import MapScreen from '../components/Map.vue';
import MessageScreen from '../components/MessageScreen.vue';

const routes = [
  {
    path: '/',
    name: 'Map',
    component: MapScreen,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: MessageScreen,
  },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: 'history',
});

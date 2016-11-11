import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';
import Store from '../components/store.vue';
import AddUser from '../components/add-user.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/store', component: Store},
  {path: '/add-user', component: AddUser},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

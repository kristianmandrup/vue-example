import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';
import Store from '../components/store.vue';
import Foo from '../components/foo.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/store', component: Store},
  {path: '/foo', component: Foo},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

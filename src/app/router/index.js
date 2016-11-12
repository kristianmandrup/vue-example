import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeComponent from '../components/home.vue';
import StoreComponent from '../components/store.vue';
import AddUserComponent from '../components/add-user.vue';
import ContextComponent from '../components/context.vue';

const routes = [
  {path: '/', component: HomeComponent},
  {path: '/store', component: StoreComponent},
  {path: '/add-user', component: AddUserComponent},
  {path: '/context', component: ContextComponent},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

import Vue from 'vue';
import VueContextable from 'vue-contextable';
import {Context} from 'contextable';
import {userSchema} from './schemas/users';

Vue.use(VueContextable);

const context = new Context();
context.defineModel('User', userSchema);

export default context;

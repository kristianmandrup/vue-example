import {app} from '.';

app.$store.replaceState(window.__STATE__);
app.$mount('#app');

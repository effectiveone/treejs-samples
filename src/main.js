import { createApp } from 'vue';
import { VueThreejs } from 'vue-threejs';

import router from './router.js';
import App from './App.vue';

const app = createApp(App);

app.use(router);

app.use(VueThreejs);

app.mount('#app');

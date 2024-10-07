import './assets/base.css';
import router from './http/router';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast from '@/components/Toast.vue';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.component('Toast', Toast);
app.use(router);

app.mount('#app');

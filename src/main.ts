import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App';
import './index.css';
import router from './router';
import store from './store';
import '@/style/index.scss';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');

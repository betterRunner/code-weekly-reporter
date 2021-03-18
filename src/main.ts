import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App';
import './index.css';
import directiveMap from './directives/index';
import router from './router';
import store from './store';

const app = createApp(App);

// directives
for (const key of Object.keys(directiveMap)) {
  const directive = directiveMap[key];
  console.log(key, directive)
  app.directive(key, directive);
}
console.log(directiveMap)

// uses
app.use(router).use(store).use(ElementPlus);

app.mount('#app');

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Button, Select, Drawer } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './registerServiceWorker'
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Drawer);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

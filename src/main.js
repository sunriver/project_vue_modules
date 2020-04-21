import Vue from 'vue'
import App from './App.vue'
import vueRouter from "./router";
import vuexStore from "./vuexstore";

Vue.config.productionTip = false

// console.log(vueRouter);

new Vue({
  router: vueRouter,
  store : vuexStore,
  render: h => h(App),
}).$mount('#app')

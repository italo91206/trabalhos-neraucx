import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Monitor from './components/Monitor.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/monitor', component: Monitor }
  ]
});

new Vue({
  router,
  template: `
  <router-view class="view"></router-view>
`
}).$mount('#app')

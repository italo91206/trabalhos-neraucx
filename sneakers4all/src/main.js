import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
});

export const HTTP = axios.create({
  baseURL: `http://localhost/sneakers4all/API/controle.php`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

new Vue({
  axios,
  router,
  template: `
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/home" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
`
}).$mount('#app')

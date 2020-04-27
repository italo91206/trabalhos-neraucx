import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueTheMask from 'vue-the-mask'
import VueMask from 'v-mask'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import VeeValidate from 'v-validate'
import './scripts/api.js';
import categories from './scripts/categories.json';
import config from './scripts/config.json';

Vue.use(VueResource);
Vue.use(VueMask);
Vue.use(VueCarousel);
Vue.use(VeeValidate);
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/css/default.css';
import '@/css/colors.css';
Vue.use(VueTheMask)
Vue.use(Vuetify, {
  theme: {
    primary: '#333399',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false;

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return formatter.format(value);
});

Vue.filter('toDate', function(value) {
   var d = new Date(value);
   var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   return  months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
});

Vue.prototype.categories = categories;
Vue.prototype.myconfigs = config;
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'app.soncocrowdcontrol.com';
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.prototype.myconfigs.api.token;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

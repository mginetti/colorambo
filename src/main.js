import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import './assets/scss/main.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const router = new VueRouter({routes});

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import './assets/css/templatemo-stand-blog.css'
import './assets/css/fontawesome.css'
import './vendor/bootstrap/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
axios.defaults.headers.common['Authorization']="Bearer CWXpYrzSgSFtcz5YxxZGzW4PaDtXfNm1piY8XvmZlvPMFqcGYB9YOyQHKOZX3GpDQKJ1iD0IWx3fLezt";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

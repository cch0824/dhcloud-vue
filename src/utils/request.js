import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios
// Vue.use(axios)
// 基准路径
const request = axios.create({
  baseUrl: 'http://192.168.20.181:8002',
  timeout: 5000
})
// 请求拦截
// request.instructions.request.use(
//   config => {

//   }
// )
export default request

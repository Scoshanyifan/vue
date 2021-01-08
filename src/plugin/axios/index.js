import axios from 'axios'

const ax = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default ax

// 请求拦截器
// ax.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = util.getToken()
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// 添加响应拦截器,对返回的数据进行处理
ax.interceptors.response.use(
  response => {
    console.log('>>> response:', response)
    let result = response.data
    if (!result.success) {
      this.$message.error(result.msg)
      return Promise.reject(result)
    }
    return result.data
  },
  error => {
    console.log('>>> error:', error)
    let result = error.response
    return Promise.reject(result)
  }
)

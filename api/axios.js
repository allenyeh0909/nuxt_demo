// 配置axios
import axios from 'axios'
const Cookie = process.client ? require('js-cookie') : undefined
// 配置基准路径
axios.defaults.baseURL = 'https://api.myjson.com/bins'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.url.toLowerCase() !== 'login') {
        let token = Cookie.get('auth')
        // 如果请求的地址不是login，设置token
        config.headers.Authorization = token
        // config.headers['x-access-token'] = tokens; // 自定义token
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    this.$message.error('请求失败')
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default axios

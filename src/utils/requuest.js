// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import router from '../router'
// 创建一个axios的实例
const service = axios.create({
    // 设置基地址
    baseURL: 'https://app.pocketgo.xyz',
    withCredentials: true,
    timeout: 600000,
})
service.defaults.headers["Content-Type"] = "application/json";

// 请求拦截器
service.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service // 导出axios实例
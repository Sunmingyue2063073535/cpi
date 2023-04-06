// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import router from '../router'
// 创建一个axios的实例
const service = axios.create({
    // 设置基地址
    baseURL: 'https://app.fidelitywallet.life',
    withCredentials: true,
    timeout: 600000,
})
service.defaults.headers["Content-Type"] = "application/json";

// 请求拦截器
service.interceptors.request.use(
    async (config) => {
        // const token = await getPhoneInfo()
        const token = 'TULZTPQL5fd81950a07d769501ca547c85b3f8f2c13ebb5e82007102b8c039ba9a2c58d4082ecb3c009e625895510239a9587650eeae039dec542b250c514294f74fec5acb4a52545f979af6334866aba55064ab49c3e2f14440631856d58c4bca6b64256bed24c965de1b8ee168f81fa37cce15'
        config.headers.Token = token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        if (response.data.status === 1012) {
            // store.commit('user/clearuserInfo')
            // //跳到登录页
            // router.push('/login')
            // //提示登录
            // Toast('অনুগ্রহ করে প্রথমে লগ-ইন করুন')
        }
        //对请求错误的结果进行拦截
        try {
            if (response.data.status && response.data.status !== 0) {
                Toast(response.data.message)
                return
            }
        } catch (error) {

        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service // 导出axios实例
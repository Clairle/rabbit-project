import axios from 'axios'

import { ElMessage } from 'element-plus'

import { useUserStore } from '@/stores/userStore'

import { useRouter } from 'vue-router'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  const userStore = useUserStore()
  // 401token失效处理
  if (e.response.status === 401) {
    userStore.clearUserInfo()
    const router = useRouter()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpInstance
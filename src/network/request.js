
// axios 的二次封装, 目的是简化端口请求和添加拦截器, 加入加载动画

import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getCookie } from '../utils/cookie'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://198.52.99.75:3000/',
        withCredentials: true,  // 允许请求携带 cookie
       
    })
    // 设定请求拦截器
    instance.interceptors.request.use(config => {
        // 请求开始时加载动画
        Nprogress.start()
        return config
    })
    // 设定请求拦截器
    instance.interceptors.response.use(config => {
        // 响应后关闭加载动画
        Nprogress.done()
        return config
    })



    return instance(config)
}
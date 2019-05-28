import axios from 'axios';

const http = axios.create({
    // baseURL: 'http://172.16.55.204:8088/app',
    baseURL: '/app',// ref @/setupProxy.js
    timeout: 1000 * 60,
    withCredentials: true
});

/**
 * 请求拦截
 */
http.interceptors.request.use((config) => {
    config.headers['token'] = new Date().getTime();
    // 防止缓存，GET请求默认带_t参数
    if (config.method === 'get') {
        config.params = {
            ...config.params,
            ...{ _t: new Date().getTime() }
        }
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use((response) => {
    // if (response.data.type !== 'ok') {
    //     router.replace({ name: 'login' })
    //     return Promise.reject(response.data.msg)
    // }
    return response
}, (error) => {
    console.error(error)
    return Promise.reject(error)
})


const json = axios.create({
    baseURL: '/',
    timeout: 1000 * 600,
    withCredentials: true
})

export { http, json }
export default { http, json };

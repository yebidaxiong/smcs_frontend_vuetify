// 封装axios方法，用自己的请求代替component中使用axios
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 6000,
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default function request(method, url, data = null) {
    method = method.toLowerCase();
    if(method === 'post') {
        return instance.post(url, data)
    }else if(method === 'get') {
        return instance.get(url, {params:data})
    }else if(method === 'put') {
        return instance.put(url, data)
    }else{
        // eslint-disable-next-line no-console
        console.error('未知的method'+method);
        return false;
    }
}
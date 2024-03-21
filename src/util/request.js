import axios from 'axios'
import { Loading, Message } from 'element-ui' // 这里我是使用elementUI的组件来给提示

let loadingInstance = null // 加载全局的loading

const instance = axios.create({ // 创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000 // 设置超时时间10s
  // baseURL: process.env.VUE_APP_BASE_API
  // baseURL: process.env.NODE_ENV === 'production' ? '//172.22.11.11:30180/' : '//172.22.11.11:30180/'   //根据自己配置的反向代理去设置不同环境的baeUrl
})
// 不用代理的情况
instance.defaults.baseURL = process.env.VUE_APP_BASE_API
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instance.defaults.headers.post[ 'Content-Type'] = 'application/x-www-form-urlencoded'

const httpCode = { // 这里我简单列出一些常见的http状态码信息，可以自己去调整配置
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}
/*
loading
*/
let loading;        //定义loading变量
function startLoading() {    //使用Element loading-start 方法
  loading = Loading.service({
    spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    text: '加载中...',
  })
}
function endLoading() {    //使用Element loading-close 方法
  loading.close()
}
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
/********************/
/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
//   config.headers['token'] = sessionStorage.getItem('token') || ''
  // loadingInstance = Loading.service({ // 发起请求时加载全局loading，请求失败或有响应时会关闭
  //   spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
  //   text: '拼命加载中...'
  // })
  showFullScreenLoading()
  if (config.method === 'get') { // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
    config.params = {
      ...config.params,
      // t: new Date().getTime()
    }
  }
  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  if (config.url.includes('pur/contract/export')) {
    config.headers['responseType'] = 'blob'
  }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  if (config.url.includes('/a/import-account')) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  tryHideFullScreenLoading()
  if (response.data.code === '200') {
    if(response.data.data){
      return Promise.resolve(response.data)
    } else{
      response.data.data = []
      return Promise.resolve(response.data)
    }
    // return Promise.resolve(response.data)
  } else {
    Message({
      message: response.data.msg,
      type: 'error'
    })
    return Promise.resolve({data:[]})
  }
}, error => {
  tryHideFullScreenLoading()
  if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
    const tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.msg
    Message({
      message: tips,
      type: 'error'
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '请求超时, 请刷新重试',
      type: 'error'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/* 统一封装post请求  */
export const posts = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
export default instance

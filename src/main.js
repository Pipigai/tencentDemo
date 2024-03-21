import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {
  MessageBox
} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  getCookie,
  setCookie,
  delCookie
} from "@/util/cookie";
import qs from 'qs'
import axios from "axios";

// 图片查看
import Viewer from 'v-viewer' 
import 'viewerjs/dist/viewer.css' 

Vue.use(Viewer) 
Viewer.setDefaults({   
   Options: { 
      'inline': true, 
      'button': true, 
      'navbar': true, 
      'title': true, 
      'toolbar': true, 
      'tooltip': true, 
      'movable': true, 
      'zoomable': true, 
      'rotatable': true, 
      'scalable': true,
      'transition': true,
      'fullscreen': true,
      'keyboard': true,
      'url': 'data-source' 
} })

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)   // 挂在在全局

import moment from 'moment';
window.qs = qs;


// import VueAxios from "vue-axios";
import VueI18n from 'vue-i18n'
Vue.prototype.$axios = axios;

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': require('./lang/en'),
    'zh': require("./lang/zh")
  }
})

Vue.filter('dataFMT', (input, formatString = "YYYY-MM-DD") => {
  //es5函数参数设置默认值
  //const lastFormatString = formatString ||
  // moment(input) 把时间字符串转成时间对象
  // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString)
})


// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(ElementUI);
Vue.prototype.$cookieStore = {
  getCookie,
  setCookie,
  delCookie
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
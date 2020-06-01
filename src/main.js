import 'babel-polyfill'  // es6转码器
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'         // 移动端300毫秒延迟
import VueLazyload from 'vue-lazyload'   // 图片懒加载
import 'assets/fonts/icons.css'
import 'assets/style/reset.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload,{
  preLoad: 1, // 预加载高度比例
  error: require('assets/img/error.png'), // 加载时图片的src
  loading: require('assets/img/loading.gif'), // 加载成功时图片的src
  attempt: 1,  // 加载图片次数
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

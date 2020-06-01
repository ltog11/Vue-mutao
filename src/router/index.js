import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/home',
  name: 'home',
  component: () => import('pages/home'),
  children: [
    {
      path: 'product/:id',
      name: 'home-product',
      component: () => import('pages/product')
    }
  ]
},
  {
    path: '/cart',
    name: 'cart',
    component: () => import('pages/cart')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('pages/category')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('pages/personal')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('pages/search')
  },
  {
    path: '*',    // 当用户在地址栏随便输入时,默认跳转到home页
    redirect: '/home'
  }
]

export default new Router({
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/main/index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: (pre => [
        {
          path: '',
          name: `${pre}authentication-method`,
          component: () => import('@/pages/parametermanage/business-parameter/authentication-method'),
          meta: {
            ...meta,
            title: 'xxx'
          }
        },
      ])
    }
  ]
})

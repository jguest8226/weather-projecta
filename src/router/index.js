import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import oneDay from '@/components/oneDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'oneDay Forecast',
      component: oneDay
    }
  ]
})

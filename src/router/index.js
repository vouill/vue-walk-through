import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import WhatWeWantAtSqreen from '@/components/WhatWeWantAtSqreen'

Vue.use(Router)

const Hello = () => import('../components/Hello')
const WhatWeWantAtSqreen = () => import('../components/WhatWeWantAtSqreen')
export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/whatwewantatsqreen',
      component: WhatWeWantAtSqreen
    }
  ]
})

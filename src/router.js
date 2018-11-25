import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },{
      path:'/recommend',
      component:()=>import('./views/recommend/Recommend.vue')
    },
    {
      path: '/singer',
      component: () => import('./views/singer/Singer.vue')
    },{
      path:'/rank',
      component:() => import('./views/rank/rank.vue')
    },{
      path:'/search',
      component:() => import('./views/search/Search.vue')
    }
  ]
})

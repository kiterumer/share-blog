import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';   //引入store
// import Login from '@/pages/Login/template.vue'
// import Create from '@/pages/Create/template.vue'
// import Detail from '@/pages/Detail/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import Index from '@/pages/Index/template.vue'
// import My from '@/pages/My/template.vue'
// import Register from '@/pages/Register/template.vue'
// import User from '@/pages/User/template.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',  //主页
      component: () => import('@/pages/Index/template.vue')
    },
    {
      path:'/login',  //登录页面
      component: () => import('@/pages/Login/template.vue')
    },
    {
      path:'/create',  //创建博客页面
      component: () => import('@/pages/Create/template.vue'),
      meta:{requireAuth: true}
    },
    {
      path:'/detail/:blogId',  //博客详情页面
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      path:'/edit/:blogId',  //编辑，修改博客页面
      component: () => import('@/pages/Edit/template.vue'),
      meta:{requireAuth: true}
    },
    {
      path:'/my',  //我的页面
      component: () => import('@/pages/My/template.vue'),
      meta:{requireAuth: true}
    },
    {
      path:'/register',  //注册页面
      component: () => import('@/pages/Register/template.vue')
    },
    {
      path:'/user/:userId',  //用户他人页面
      component: () => import('@/pages/User/template.vue')
    }
  ]
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireAuth)){
    store.dispatch('checkLogin').then(isLogin =>{
      if(!isLogin){
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }else{
        next()
      }
    })
  }else{
    next()
  }
})


export default router
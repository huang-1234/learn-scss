// import  jzf from './jzf'
const Rem = ()=> import('@/component/layout-skill/rem.vue')
export default [
  //一级路由
  {
    path: '/layout-skill',//登录
    name: 'LayoutSkill',
    component: () => import('../views/layout-skill')
  },
  {
    path: '/',//默认登录界面
    redirect: '/router_login'
  }
  // ,
  // {
  //   path: '/router_main',//主页面
  //   name: 'Main',
  //   redirect:'/router_home',
  //   component: () => import('../views/main.vue'),
  //   children:[//二级路由
  //     ...jzf,
  //     {
  //       path: '/router_example',//组件测试页面
  //       name: 'router_example',
  //       component: () => import('../views/example/index.vue')
  //     },
  //     {
  //       path: '/router_trafficAnalysis',//请求方新增、详情、编辑
  //       name: 'TrafficAnalysis',
  //       component: () => import(  '../views/serviceManage/TrafficAnalysis.vue')
  //     }import component from './../../../../VueProject/vue3-basic/src/shims-vue.d';

  //   ]
  // }
]
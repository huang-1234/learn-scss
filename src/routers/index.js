import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import LearnScss from './learnScss'

export default new Router({

  routes:[
    ...LearnScss
  ],
  mode:'history',
  // base:'/sky-rxy-web/'
})
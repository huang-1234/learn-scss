

export default [
  {
    path: '/layout',
    name:'Layout',
    component:()=>import('../views/layout')
  },
  {
    path: '/behavior',
    name:'Behavior',
    component:()=>import('../views/behavior')
  },
  {
    path: '/color',
    name:'Color',
    component:()=>import('../views/color')
  },
  {
    path: '/figure',
    name:'Figure',
    component:()=>import('../views/figure')
  },
  {
    path: '/compo',
    name:'Compo',
    component:()=>import('../views/compo')
  },
]
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const ControlCenterRouter = {
    path: '/ControlCenter',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
      title: 'ControlCenter',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/ControlCenter/'),
        name: 'index',
        meta: { title: '总览' }
      }
    ]
  }
export default ControlCenterRouter

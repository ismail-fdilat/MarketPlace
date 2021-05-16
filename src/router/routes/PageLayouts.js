import { lazy } from 'react'

const PageLayoutRoutes = [
  {
    path: '/admin/page-layout/collapse-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/CollapsedMenu')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/admin/page-layout/layout-boxed',
    component: lazy(() => import('../../views/ui-elements/page-layouts/BoxedLayout')),
    meta: {
      contentWidth: 'boxed'
    }
  },
  {
    path: '/admin/page-layout/without-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/WithoutMenu')),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/admin/page-layout/layout-empty',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutEmpty'))
  },
  {
    path: '/admin/page-layout/layout-blank',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutBlank')),
    layout: 'BlankLayout'
  }
]

export default PageLayoutRoutes

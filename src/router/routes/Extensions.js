import { lazy } from 'react'

const ExtensionsRoutes = [
  {
    path: '/admin/extensions/sweet-alert',
    component: lazy(() => import('../../views/extensions/sweet-alert'))
  },
  {
    path: '/admin/extensions/toastr',
    component: lazy(() => import('../../views/extensions/toastify'))
  },
  {
    path: '/admin/extensions/slider',
    component: lazy(() => import('../../views/extensions/sliders'))
  },
  {
    path: '/admin/extensions/drag-and-drop',
    component: lazy(() => import('../../views/extensions/drag-and-drop'))
  },
  {
    path: '/admin/extensions/tour',
    component: lazy(() => import('../../views/extensions/tour'))
  },
  {
    path: '/admin/extensions/clipboard',
    component: lazy(() => import('../../views/extensions/copy-to-clipboard'))
  },
  {
    path: '/admin/extensions/react-player',
    component: lazy(() => import('../../views/extensions/react-player'))
  },
  {
    path: '/admin/extensions/context-menu',
    component: lazy(() => import('../../views/extensions/context-menu'))
  },
  {
    path: '/admin/extensions/swiper',
    component: lazy(() => import('../../views/extensions/swiper'))
  },
  {
    path: '/admin/access-control',
    component: lazy(() => import('../../views/extensions/access-control')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/admin/extensions/ratings',
    component: lazy(() => import('../../views/extensions/ratings'))
  },
  {
    path: '/admin/extensions/pagination',
    component: lazy(() => import('../../views/extensions/pagination'))
  },
  {
    path: '/admin/extensions/import',
    component: lazy(() => import('../../views/extensions/import-export/Import'))
  },
  {
    path: '/admin/extensions/export',
    component: lazy(() => import('../../views/extensions/import-export/Export'))
  },
  {
    path: '/admin/extensions/export-selected',
    component: lazy(() => import('../../views/extensions/import-export/ExportSelected'))
  },
  {
    path: '/admin/extensions/i18n',
    component: lazy(() => import('../../views/extensions/i18n'))
  }
]

export default ExtensionsRoutes

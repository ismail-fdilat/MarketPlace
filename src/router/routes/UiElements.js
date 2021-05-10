import { lazy } from 'react'

const UiElementRoutes = [
  {
    path: '/admin/ui-element/typography',
    component: lazy(() => import('../../views/ui-elements/typography'))
  },
  {
    path: '/admin/colors/colors',
    component: lazy(() => import('../../views/ui-elements/colors'))
  },
  {
    path: '/admin/icons/reactfeather',
    component: lazy(() => import('../../views/ui-elements/icons'))
  },
  {
    path: '/admin/cards/basic',
    component: lazy(() => import('../../views/ui-elements/cards/basic'))
  },
  {
    path: '/admin/cards/advance',
    component: lazy(() => import('../../views/ui-elements/cards/advance'))
  },
  {
    path: '/admin/cards/statistics',
    component: lazy(() => import('../../views/ui-elements/cards/statistics'))
  },
  {
    path: '/admin/cards/analytics',
    component: lazy(() => import('../../views/ui-elements/cards/analytics'))
  },
  {
    path: '/admin/cards/action',
    component: lazy(() => import('../../views/ui-elements/cards/actions'))
  },
  {
    path: '/admin/components/alerts',
    component: lazy(() => import('../../views/components/alerts'))
  },
  {
    path: '/admin/components/auto-complete',
    component: lazy(() => import('../../views/components/autocomplete'))
  },
  {
    path: '/admin/components/avatar',
    component: lazy(() => import('../../views/components/avatar'))
  },
  {
    path: '/admin/components/badges',
    component: lazy(() => import('../../views/components/badge'))
  },
  {
    path: '/components/blockui',
    component: lazy(() => import('../../views/components/block-ui'))
  },
  {
    path: '/components/breadcrumbs',
    component: lazy(() => import('../../views/components/breadcrumbs'))
  },
  {
    path: '/components/buttons',
    component: lazy(() => import('../../views/components/buttons'))
  },
  {
    path: '/admin/components/carousel',
    component: lazy(() => import('../../views/components/carousel'))
  },
  {
    path: '/admin/components/collapse',
    component: lazy(() => import('../../views/components/collapse'))
  },
  {
    path: '/admin/components/divider',
    component: lazy(() => import('../../views/components/divider'))
  },
  {
    path: '/admin/components/dropdowns',
    component: lazy(() => import('../../views/components/dropdowns'))
  },
  {
    path: '/admin/components/list-group',
    component: lazy(() => import('../../views/components/listGroup'))
  },
  {
    path: '/admin/components/media-objects',
    component: lazy(() => import('../../views/components/media'))
  },
  {
    path: '/admin/components/modals',
    component: lazy(() => import('../../views/components/modal'))
  },
  {
    path: '/admin/components/nav-component',
    component: lazy(() => import('../../views/components/navComponent'))
  },
  {
    path: '/admin/components/pagination',
    component: lazy(() => import('../../views/components/pagination'))
  },
  {
    path: '/admin/components/pill-badges',
    component: lazy(() => import('../../views/components/badgePills'))
  },
  {
    path: '/admin/components/pills-component',
    component: lazy(() => import('../../views/components/tabPills'))
  },
  {
    path: '/admin/components/popovers',
    component: lazy(() => import('../../views/components/popovers'))
  },
  {
    path: '/admin/components/progress',
    component: lazy(() => import('../../views/components/progress'))
  },
  {
    path: '/admin/components/spinners',
    component: lazy(() => import('../../views/components/spinners'))
  },
  {
    path: '/admin/components/tabs-component',
    component: lazy(() => import('../../views/components/tabs'))
  },
  {
    path: '/admin/components/timeline',
    component: lazy(() => import('../../views/components/timeline'))
  },
  {
    path: '/admin/components/toasts',
    component: lazy(() => import('../../views/components/toasts'))
  },
  {
    path: '/admin/components/tooltips',
    component: lazy(() => import('../../views/components/tooltips'))
  }
]

export default UiElementRoutes

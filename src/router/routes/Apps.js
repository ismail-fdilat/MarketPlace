import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/admin/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/admin/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/admin/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/admin/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/admin/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/admin/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/admin/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/admin/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/admin/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/admin/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/admin/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/admin/apps/invoice/preview'
    }
  },
  {
    path: '/admin/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/admin/apps/invoice/preview/4987' />
  },
  {
    path: '/admin/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/admin/apps/invoice/edit'
    }
  },
  {
    path: '/admin/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/admin/apps/invoice/edit/4987' />
  },
  {
    path: '/admin/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/admin/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/admin/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/admin/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/admin/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/admin/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/admin/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/admin/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/admin/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/admin/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/admin/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/admin/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  }
]

export default AppRoutes

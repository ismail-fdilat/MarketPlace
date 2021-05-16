import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/admin/login',
    component: lazy(() => import('../../views/pages/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/admin/pages/login-v1',
    component: lazy(() => import('../../views/pages/authentication/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/login-v2',
    component: lazy(() => import('../../views/pages/authentication/LoginV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/register',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/admin/pages/register-v1',
    component: lazy(() => import('../../views/pages/authentication/RegisterV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/register-v2',
    component: lazy(() => import('../../views/pages/authentication/RegisterV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/admin/pages/forgot-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/forgot-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV2.js')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/reset-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/reset-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/admin/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/admin/pages/faq',
    component: lazy(() => import('../../views/pages/faq'))
  },
  {
    path: '/admin/pages/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/admin/pages/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/admin/pages/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/admin/pages/account-settings',
    component: lazy(() => import('../../views/pages/account-settings'))
  },
  {
    path: '/admin/pages/blog/list',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/list'))
  },
  {
    path: '/admin/pages/blog/detail/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/details')),
    meta: {
      navLink: '/pages/blog/detail'
    }
  },
  {
    path: '/admin/pages/blog/detail',
    exact: true,
    component: () => <Redirect to='/pages/blog/detail/1' />
  },
  {
    path: '/admin/pages/blog/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/edit')),
    meta: {
      navLink: '/pages/blog/edit'
    }
  },
  {
    path: '/admin/pages/blog/edit',
    exact: true,
    component: () => <Redirect to='/pages/blog/edit/1' />
  },
  {
    path: '/admin/pages/pricing',
    component: lazy(() => import('../../views/pages/pricing'))
  },
  {
    path: '/admin/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/admin/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/admin/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/admin/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes

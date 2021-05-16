import { lazy } from "react"
import { Redirect } from 'react-router-dom'

const ClientRoutes = [
    {
    path: '/shop',
    exact : true,    
    layout : 'HorizontalLayout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/shop/wishlist',
    layout : 'HorizontalLayout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/shop/product-detail',
    exact: true,
    className: 'ecommerce-application',
    layout : 'HorizontalLayout',
    component: () => <Redirect to='/shop/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/shop/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    layout : 'HorizontalLayout',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/shop/product-detail'
    }
  },
  {
    path: '/shop/checkout',
    layout : 'HorizontalLayout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  }
]

export default ClientRoutes;
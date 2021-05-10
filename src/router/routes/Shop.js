import { lazy } from 'react'

const Shop = [
  {
    path: '/admin/products',
    component: lazy(() => import('../../views/shop/Products/AllProducts'))
  },
  {
    path: '/admin/orders',
    component: lazy(() => import('../../views/charts/apex'))
  },
  {
    path: '/admin/categories',
    component: lazy(() => import('../../views/shop/Categories/AllCategories'))
  }
]

export default Shop

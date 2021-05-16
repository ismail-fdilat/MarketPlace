import { lazy } from 'react'

const StockManagementRoutes = [
    {
        path: '/management/products',
        component: lazy(() => import('../../views/stock-management/Products')),
        exact : true
    },
    {
        path: '/management/custumors',
        component: lazy(() => import('../../views/stock-management/custumors')),
        exact: true
    },
    {
        path: '/management/sales',
        component: lazy(() => import('../../views/stock-management/sales/list')),
        exact: true
    },
    {
        path: '/management/buyings',
        component: lazy(() => import('../../views/stock-management/Buyings')),
        exact: true
    }
]

export default StockManagementRoutes

import { lazy } from 'react'

const TablesRoutes = [
  {
    path: '/admin/tables/reactstrap',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/admin/datatables/basic',
    component: lazy(() => import('../../views/tables/data-tables/basic'))
  },
  {
    path: '/admin/datatables/advance',
    component: lazy(() => import('../../views/tables/data-tables/advance'))
  }
]

export default TablesRoutes

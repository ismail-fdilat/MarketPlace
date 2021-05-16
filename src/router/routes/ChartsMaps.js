import { lazy } from 'react'

const ChartMapsRoutes = [
  {
    path: '/admin/charts/apex',
    component: lazy(() => import('../../views/charts/apex'))
  },
  {
    path: '/admin/charts/chartjs',
    component: lazy(() => import('../../views/charts/chart-js'))
  },
  {
    path: '/admin/charts/recharts',
    component: lazy(() => import('../../views/charts/recharts'))
  },
  {
    path: '/admin/maps/leaflet',
    component: lazy(() => import('../../views/maps'))
  }
]

export default ChartMapsRoutes

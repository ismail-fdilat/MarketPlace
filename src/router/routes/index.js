// ** Routes Imports
import Shop from './Shop'
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import ClientRoutes from './ClientRoutes'
import StockManagementRoutes from './stock-management'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/admin/dashboard/ecommerce'
// ** Merge Routes
const Routes = [
  ...Shop,
  ...DashboardRoutes,
  ...StockManagementRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes,
  ...ClientRoutes
]

export { DefaultRoute, TemplateTitle, Routes }

// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'
import stockManagement from './stock-management'

// ** Merge & Export
export default [...dashboards, ...stockManagement]

// ,...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others

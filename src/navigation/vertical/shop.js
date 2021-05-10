import { PieChart, ShoppingCart, ShoppingBag, Folder, Circle, Map } from 'react-feather'
export default [
  {
    header: 'Shop'
  },
  {
    id: 'Categories',
    title: 'Categories',
    icon: <Folder size={20} />,
    navLink: '/admin/categories'
  },
  {
    id: 'Products',
    title: 'Products',
    icon: <ShoppingBag size={20} />,
    navLink: '/admin/products'
  },
  {
    id: 'Orders',
    title: 'Orders',
    icon: <ShoppingCart size={20} />,
    navLink: '/admin/orders'
  }
]

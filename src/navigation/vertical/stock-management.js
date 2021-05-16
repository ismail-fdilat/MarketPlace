import { Database, Circle } from 'react-feather'

export default [
  {
    id: 'stock-management',
    title: 'Stock Management',
    icon: <Database size={20} />,
    badge: 'light-warning',
    badgeText: '4',
    children: [
        {
            id: 'products-management',
            title: 'Gestion de produit',
            icon: <Circle size={12} />,
            navLink: '/management/products'
        },
        {
            id: 'custumor-management',
            title: 'Gestion de client',
            icon: <Circle size={12} />,
            navLink: '/management/custumors'
        },
        {
            id: 'sales',
            title: 'Ventes',
            icon: <Circle size={12} />,
            navLink: '/management/sales'
          
        },
        {
            id: 'buyings',
            title: 'Achats',
            icon: <Circle size={12} />,
            navLink: '/management/buyings'
          
        }
    ]
  }
]

import { Server, Grid, Circle } from 'react-feather'

export default [
  {
    id: 'tablesReactstrap',
    title: 'Table',
    icon: <Server size={20} />,
    navLink: '/admin/tables/reactstrap'
  },
  {
    id: 'dataTable',
    title: 'DataTable',
    icon: <Grid size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'Basic',
        icon: <Circle size={12} />,
        navLink: '/admin/datatables/basic'
      },
      {
        id: 'dtAdvance',
        title: 'Advanced',
        icon: <Circle size={12} />,
        navLink: '/admin/datatables/advance'
      }
    ]
  }
]

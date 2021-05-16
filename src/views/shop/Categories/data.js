
import { FolderPlus } from 'react-feather'
import { Link } from 'react-router-dom'


// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Slug',
    selector: 'slug',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Order',
    selector: 'order',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Children',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (

        <Link to={(`/admin/categories/${row.id.toString()}`)}>
          <FolderPlus />
        </Link>
      )
    }
  }

]

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import Axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

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
  }

]

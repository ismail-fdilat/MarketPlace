// ** Custom Components
import Avatar from '@components/avatar'
import { useEffect, useState } from 'react'
// ** Third Party Components
import Axios from 'axios'
import Api from '@src/api.json'
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
    name: 'Product',
    minWidth: '150px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <Avatar img={(row.href.images.length > 0) ? `${Api.link}/${row.href.images[0].images}` : ""}/>
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.name}</span>
          <small>#{row.id}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Stock',
    selector: 'stock',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Stock Min',
    selector: 'min_stock',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Solde Price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      `${row.TotalPrice} $`
    )
  },
  {
    name: 'Original Price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      `${row.price} $`
    )
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      
      return (row.status) ?  (<Badge color={'light-success'} pill> Actif</Badge>) : (<Badge color={'light-danger'} pill>  inactif</Badge>)
      
    }
  }
]

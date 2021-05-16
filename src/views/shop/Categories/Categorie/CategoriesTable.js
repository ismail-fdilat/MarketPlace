// ** React Imports
import { Fragment, useState, useEffect, forwardRef } from 'react'
import Axios from 'axios'
// ** Table Data & Columns
import { columns } from '../data'
import AddModal from './AddModal'
import Api from '@src/api.json'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Plus } from 'react-feather'
import {
  Card,
  CardHeader,
  Button,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap'


const ProductsTable = (props) => {
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`${Api.link}/shop/4/category/${props.Catid}`).then(response => {
      setData(response.data.category.children)
    })
  }, [])
  
  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.slug.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.slug.toLowerCase().includes(value.toLowerCase()) 

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )

  return (
    <>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
            <Col className='d-flex align-items-center justify-content-end mt-1' md='12' sm='12'>
                <Label className='mr-1' for='search-input'>
                Search
                </Label>
                <Input
                className='dataTable-filter mb-25'
                type='text'
                bsSize='sm'
                id='search-input'
                value={searchValue}
                onChange={handleFilter}
                />
                <Button className='ml-2' color='primary' onClick={handleModal}>
                    <Plus size={20} />
                </Button>
            </Col>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          
        </Row>
        <DataTable
          noHeader
          pagination
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
        />
      </Card>
      <AddModal  open={modal} handleModal={handleModal} />
      </>
  )
}

export default ProductsTable

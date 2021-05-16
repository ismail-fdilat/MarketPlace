import {React, Fragment} from "react"
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col } from 'reactstrap'

// ** Products Table
import ProductsTable from './CategoriesTable.js'

function index() {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Categories"
        breadCrumbParent="Shop"
        breadCrumbActive="Categories"
      />
      <Row>
        <Col sm="12">
          <ProductsTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default index

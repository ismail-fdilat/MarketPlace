import {React, Fragment} from "react"
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col } from 'reactstrap'

// ** Products Table
import ProductsTable from './ProductsTable.js'

function index() {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="View Prodcuts"
        breadCrumbParent="Shop"
        breadCrumbActive="Products"
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

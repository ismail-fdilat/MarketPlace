import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  //CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CBadge,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import ProductsData from "../ProductsData.json";

export default function Index() {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    
    currentPage !== newPage &&
      history.push(`/products/All-products?page=${newPage}`);
  };

  const DeletProd = (index) => {
    history.push(`/products/All-products/${index}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>Products</CCardHeader>
          <CCardBody>
            <CDataTable
              items={ProductsData}
              fields={[
                "product",
                { key: "name", _classes: "font-weight-bold" },
                "price",
                "stock",
                "discount",
                "live",
                "action"
              ]}
              hover
              striped
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              activePage={page}
              
              scopedSlots={{
                'product': (item) => (
                  <td className="w-25">
                    <div className="w-25">
                      <img alt={item.name} className="w-25" src={item.product[0]}/>
                    </div>
                  </td>
                ),
                'live': (item) => {
                  if(item.live == true)
                  return (
                  <td className="w-25">
                    <CBadge color={'success'}>
                      Online
                    </CBadge>
                  </td>)
                  else
                  return(
                  <td className="w-25">
                    <CBadge color={'danger'}>
                      Offline
                    </CBadge>
                  </td>
                )},
                'action': (_, key) => {return (
                  <td className="w-25">
                   <CButton color="primary" className='mx-1' onClick={() => history.push(`/products/${key}`)} variant="outline" shape="square" > <FaEye style={{right : -10, }} size={18}/></CButton>
                   <CButton color="primary" className='mx-1' variant="outline" shape="square" onClick={() => history.push(`/products/edit/${key}`)} > <FaPencilAlt size={18}/> </CButton>
                   <CButton color="primary" className='mx-1' variant="outline" shape="square" onClick={()=>{DeletProd(key)}} > <FaTrash size={18}/> </CButton>
                  </td>
                )},
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={Math.round(ProductsData.length/5)}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

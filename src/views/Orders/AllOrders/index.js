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
import CIcon from "@coreui/icons-react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import OrdersData from "../OrdersData.json";

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
              items={OrdersData}
              fields={[
                { key: "id", _classes: "font-weight-bold" },
                "date",
                "costumer",
                "Payment",
                "status",
                "totalprice",
              ]}
              hover
              striped
              tableFilter
              itemsPerPageSelect
              clickableRows
              onRowClick={(order) => history.push(`/orders/${order.id}`)}
              itemsPerPage={5}
              activePage={page}
              scopedSlots={{
                live: (item) => {
                  if (item.live == true)
                    return (
                      <td className="w-25">
                        <CBadge color={"success"}>Online</CBadge>
                      </td>
                    );
                  else
                    return (
                      <td className="w-25">
                        <CBadge color={"danger"}>Offline</CBadge>
                      </td>
                    );
                }
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={Math.round(OrdersData.length / 5)}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

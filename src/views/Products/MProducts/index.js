import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCarousel,
  CCarouselInner,
  CCarouselItem,
  CCarouselControl,
  CCarouselIndicators,
  CCollapse,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ProductsData from "../ProductsData.json";
const index = ({ match }) => {
  const product = ProductsData[match.params.id];

  const userDetails = product
    ? Object.entries(product)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  console.log(product);
  const imgs = userDetails[0][1].length > 0 ? true : false;

  return (
    <div>
      <CRow>
        <CCol lg={12}>
          <CCard>
            <CCardHeader>
              <h2>Information du produit </h2>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol className="my-auto" lg={3}>
                  <CCarousel autoSlide={1700} animate>
                    <CCarouselIndicators />
                    <CCarouselInner>
                      {imgs
                        ? userDetails[0][1].map((object, i) => (
                            <CCarouselItem key={i}>
                              <img
                                key={i}
                                className="d-block w-100"
                                alt={i + "img"}
                                src={object}
                              />
                            </CCarouselItem>
                          ))
                        : null}
                    </CCarouselInner>
                    <CCarouselControl direction="prev" />
                    <CCarouselControl direction="next" />
                  </CCarousel>
                </CCol>
                <CCol lg={9}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      {userDetails.map(([key, value], index) => {
                        if (key == "product") {
                          return;
                        } else if (key == "reviews") {
                          return;
                        } else if (key == "id")
                          return (
                            <tr key="nofound">
                              <td>Produit</td>
                              <td>
                                <span>
                                  <CIcon
                                    className="text-muted"
                                    name="cil-ban"
                                    size={"xl"}
                                  />{" "}
                                  Not found
                                </span>
                              </td>
                            </tr>
                          );
                        else
                          return (
                            <tr key={index.toString()}>
                              <td>{`${key}:`}</td>
                              <td>
                                <strong>{value.toString()}</strong>
                              </td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </CCol>
              </CRow>
              <CRow>
                <CCol lg={12}>
                  <CCard className="mt-3">
                    <CCardHeader>
                      <h4>Reviews </h4>
                    </CCardHeader>
                    <CCardBody>
                      {ProductsData[match.params.id].reviews.map(
                        (anObjectMapped, index) => {
                          return (
                            <p key={index}>
                              <strong>{anObjectMapped.user}</strong> :{" "}
                              {anObjectMapped.review}
                            </p>
                          );
                        }
                      )}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default index;

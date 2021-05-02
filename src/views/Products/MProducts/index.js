import React from "react";
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
  const imgs = userDetails[0][1].length > 0 ? true : false;
  return (
    <div>
      <CRow>
        <CCol lg={3}>
          <CCard>
            <CCardHeader>
              <h2>Images : </h2>
            </CCardHeader>

            <CCardBody>
              <CCarousel autoSlide={1700} animate>
                <CCarouselIndicators />
                <CCarouselInner>
                  {imgs
                    ? userDetails[0][1].map((object, i) => (
                        <CCarouselItem key={i}>
                          <img
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
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={8}>
          <CCard>
            <CCardHeader>
              <h2>Information du produit </h2>
            </CCardHeader>
            <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {userDetails.map(([key, value], index) => {
                    if (key == "product") {
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={11}>
          <CCard>
            <CCardHeader>
              <h2>Reviews </h2>
            </CCardHeader>
            <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {userDetails.map(([key, value], index) => {
                    if (key == "product") {
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default index;

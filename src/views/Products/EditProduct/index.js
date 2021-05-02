import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  //CInputCheckbox,
  //CInputRadio,
  CLabel,
  //CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ProductsData from "../ProductsData.json";
import { ImCross} from 'react-icons/im';
//import { DocsLink } from "src/reusable";

export default function Index({ match }) {
  const [ProductData, setProductData] = useState({
    ProLive: !ProductsData[match.params.id].live,
    ProImages: ProductsData[match.params.id].product,
    ProName: ProductsData[match.params.id].name,
    ProDesc: ProductsData[match.params.id].description,
    ProPrice: ProductsData[match.params.id].price,
    ProDiscount: ProductsData[match.params.id].discount,
    ProStock: ProductsData[match.params.id].stock
  });

  const Livechange = () => {
    setProductData((prevProductData) => {
      return {
        ...prevProductData,
        ProLive: ProductData.ProLive ? false : true,
      };
    });
  };

  const Namechange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProName: e.target.value };
    });
  };
  const Descchange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProDesc: e.target.value };
    });
  };
  const Pricechange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProPrice: e.target.value };
    });
  };
  const Discountchange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProDiscount: e.target.value };
    });
  };
  const Stockchange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProStock: e.target.value };
    });
  };

  const Imagechange = (e) => {
    setProductData((prevProductData) => {
      return { ...prevProductData, ProImages: ProductData.ProImages.concat(Array.from(e.target.files)) };
    });
  };

  const handlSubmit = () => {
    console.log(ProductData);
    //history.push('/products/Add-productss')
    /*
    ProductData.ProLive
    ProductData.ProName
    ProductData.ProDesc
    ProductData.ProPrice
    ProductData.ProDiscount
    ProductData.ProStock
    ProductData.ProImages
    */
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="8">
          <CCard>
            <CForm
              action=""
              method="get"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CCardHeader>
                <CFormGroup row>
                  <CCol tag="label" sm="9">
                    <h3>Product n° : {match.params.id}</h3>
                  </CCol>
                  <CCol
                    sm="3"
                    className="d-flex justify-content-around align-items-center"
                  >
                    <h6>Live</h6>
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                      onClick={Livechange}
                      checked={ProductData.ProLive}
                    />
                  </CCol>
                </CFormGroup>{" "}
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Text"
                      onChange={Namechange}
                      value={ProductData.ProName}
                    />
                    <CFormText>make a brief name for the product</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Content..."
                      onChange={Descchange}
                      value={ProductData.ProDesc}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol
                    className="d-flex justify-content-around"
                    xs="12"
                    md="6"
                  >
                    <CLabel htmlFor="text-input">Price :</CLabel>
                    <CInput
                      className="w-50"
                      id="text-input"
                      name="text-input"
                      placeholder="$"
                      onChange={Pricechange}
                      value={ProductData.ProPrice}
                    />
                  </CCol>

                  <CCol
                    className="d-flex justify-content-around"
                    xs="12"
                    md="6"
                  >
                    <CLabel htmlFor="text-input">Discount:</CLabel>
                    <CInput
                      className="w-50"
                      id="text-input"
                      name="Discountchange"
                      placeholder="Discount"
                      onChange={Discountchange}
                      value={ProductData.ProDiscount}
                    />
                  </CCol>
                </CFormGroup>
                <hr></hr>
                <CFormGroup row>
                  <CCol
                    className="d-flex justify-content-around"
                    xs="12"
                    md="6"
                  >
                    <CLabel htmlFor="text-input">Stock :</CLabel>
                    <CInput
                      className="w-50"
                      id="text-input"
                      name="text-input"
                      placeholder="Stock"
                      onChange={Stockchange}
                      value={ProductData.ProStock}
                    />
                  </CCol>
                </CFormGroup>
                <hr></hr>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Pictures</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInputFile
                      id="file-multiple-input"
                      name="file-multiple-input"
                      multiple
                      custom
                      onChange={Imagechange}
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Pictures...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CForm>
            <CCardFooter className="d-flex justify-content-between">
              <CButton className="" type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
              <CButton
                onClick={handlSubmit}
                className=""
                type="submit"
                size="sm"
                color="primary"
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
              Product Pictures
              {/* <DocsLink name="CCard" /> */}
            </CCardHeader>
            <CCardBody>
                <CRow>
                    {ProductData.ProImages.map((image) => (
                        <CCol xl={6}>
                            <ImCross></ImCross>
                            <img className="w-100 rounded" src={(typeof image == 'string')? image : URL.createObjectURL(image)} />
                        </CCol>
                    ))}
                </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

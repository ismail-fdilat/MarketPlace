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

//import { DocsLink } from "src/reusable";




export default function Index() {

  const [ProductData , setProductData] = useState({ProLive:true, ProImages:[]})


  const Livechange = () => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProLive : (ProductData.ProLive) ? false : true }
    })
  }

  const Namechange = (e) => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProName : e.target.value }
    })
  }
  const Descchange = (e) => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProDesc : e.target.value }
    })
  }
  const Pricechange = (e) => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProPrice : e.target.value }
    })
  }
  const Discountchange = (e) => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProDiscount : e.target.value }
    })
  }
  const Stockchange = (e) => {
    setProductData( prevProductData => { 
      return {...prevProductData ,ProStock : e.target.value }
    })
  }

  const Imagechange = (e) => {
    setProductData( prevProductData => {
      return {...prevProductData ,ProImages : Array.from(e.target.files) }
    })
  }

  const handlSubmit = () => {
    console.log(ProductData)
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
  }



  return (
    <>
      <CRow>
        <CCol xs="12" md="8">
          <CCard>
            <CForm
              action=""
              method="get"
              encType="multipart/form-data"
              className="form-horizontal">
              <CCardHeader>
                <CFormGroup row>
                  <CCol tag="label" sm="9">
                    <h3>Add Extern Product</h3>
                  </CCol>
                  <CCol
                    sm="3"
                    className="d-flex justify-content-around align-items-center"
                  >
                    <h6>Live</h6>
                    <CSwitch
                      className="mr-1"
                      color="dark"
                      defaultChecked
                      shape="pill"
                      variant="opposite"
                      onClick={Livechange}
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
                      required
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
                    />
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Inline Radios</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio
                        custom
                        id="inline-radio1"
                        name="inline-radios"
                        value="option1"
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                        One
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio
                        custom
                        id="inline-radio2"
                        name="inline-radios"
                        value="option2"
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                        Two
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio
                        custom
                        id="inline-radio3"
                        name="inline-radios"
                        value="option3"
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                        Three
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Inline Checkboxes</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        value="option1"
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="inline-checkbox1"
                      >
                        One
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        id="inline-checkbox2"
                        name="inline-checkbox2"
                        value="option2"
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="inline-checkbox2"
                      >
                        Two
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        id="inline-checkbox3"
                        name="inline-checkbox3"
                        value="option3"
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="inline-checkbox3"
                      >
                        Three
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>*/}
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
              <CButton onClick={handlSubmit} className="" type="submit" size="sm" color="primary">
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
            {
              ProductData.ProImages.map(image=>(
                <img className="w-50" src={URL.createObjectURL(image)}/>
            ))
            }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}
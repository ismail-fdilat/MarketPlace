// ** React Imports
import { useState, useRef } from 'react'
import FileUploaderMulti from './FileUploaderMulti'
import Axios from 'axios'
import Api from '@src/api.json'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  CustomInput
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddModal = ({ open, handleModal, shop }) => {
  // ** State
  const [refimages, SetImages] = useState([])
  const [Sstatus, SetSstatus] = useState(true)
  const [Name, SetName] = useState("")
  const [Desc, SetDesc] = useState("")
  const [Stock, SetStock] = useState()
  const [StockMin, SetStockMin] = useState()
  const [Price, Setprice] = useState()
  const [Discount, SetDiscount] = useState()

  const onStatusChange = (data) => {
    console.log(data.target.checked)
    SetSstatus(data.target.checked)
  }
  const onNameChange = (data) => {
    SetName(data.target.value)
  }
  const onDescChange = (data) => {
    SetDesc(data.target.value)
  }
  const onStockChange = (data) => {
    SetStock(data.target.value)
  }
  const onStockMinChange = (data) => {
    SetStockMin(data.target.value)
  }
  const onpriceChange = (data) => {
    Setprice(data.target.value)
  }
  const onDiscountChange = (data) => {
    SetDiscount(data.target.value)
  }

  const HandlSubmit = () => {
    //console.log(refimages)
      Axios({
        method: 'post',
        url: `${Api.link}/api/shop/${shop}/products`,
        data: { name: Name,
                description: Desc,
                stock: Stock,
                min_stock: StockMin,
                price: Price,
                discount: Discount,
                status: Sstatus 
              }
      }).then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.data.data.id)
        
        for (let index = 0; index < refimages.length; index++) {
          const element = refimages[index]
          console.log(element)
          const Data = new FormData()
          Data.append('images', element)
          Axios.post(`${Api.link}/api/products/${response.data.data.id}/images`, Data, {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept : "application/json"
            }
          }).then((res) => {
            console.log(res.data)
            location.reload(false)
            handleModal()
          })
        }
      })
  }

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <div >
              <CustomInput
                className='custom-control-success'
                type='switch'
                id='success'
                name='success'
                inline
                onChange={onStatusChange}
              />
        </div>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <FormGroup>
          <FileUploaderMulti Uimages={(imgs) => SetImages(oldArray => [...oldArray, imgs])} />
        </FormGroup>
        <FormGroup>
          <Label for='name'>Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' onChange={onNameChange} placeholder='Iphone X' />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='slug'>Description</Label>
          <InputGroup>
            <Input type='textarea' onChange={onDescChange} id='slug' placeholder='description' />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='name'>Stock</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' type={'number'} onChange={onStockChange} placeholder='10' />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='name'>Stock Min</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' type={'number'} onChange={onStockMinChange} placeholder='10' />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='name'>Price</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' type={'number'} onChange={onpriceChange} placeholder='10' />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='name'>Discount</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' type={'number'} onChange={onDiscountChange} placeholder='10' />
          </InputGroup>
        </FormGroup>
        <Button className='mr-1' color='primary' onClick={HandlSubmit}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddModal

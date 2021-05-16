// ** React Imports
import { useState } from "react"
import Axios from "axios"
import Api from '@src/api.json'
import { User, Briefcase, X } from "react-feather"
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
  Label
} from "reactstrap"

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss"

const AddModal = ({ open, handleModal }) => {

  // ** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={handleModal} />
  )
  // ** new categorie inputs value
  const [NewCat, SetNewCat] = useState({ Name: "", Slug: "" })

  // ** onclick Submit event
  const handleSub = () => {
    Axios({
      method: 'post',
      url: `${Api.link}/shop/4/category`,
      data: { name: NewCat.Name, slug: NewCat.Slug}
    }).then((response) => {
      console.log(response.data)
      handleModal()
    })
  }

  const handleNameChange = (e) => {
    SetNewCat({ ...NewCat, Name: e.target.value })
  }
  const handleSlugChange = (e) => {
    SetNewCat({ ...NewCat, Slug: e.target.value })
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className="sidebar-sm"
      modalClassName="modal-slide-in"
      contentClassName="pt-0"
    >
      <ModalHeader
        className="mb-3"
        toggle={handleModal}
        close={CloseBtn}
        tag="div"
      >
        <h5 className="modal-title">New Record</h5>
      </ModalHeader>
      <ModalBody className="flex-grow-1 pt-5">
        <FormGroup>
          <Label for="parent-categorie">Parent Categorie</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id="parent-categorie" placeholder="none" disabled />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id="name"
              onChange={handleNameChange}
              placeholder="name your categorie"
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="slug">Slug</Label>
          <InputGroup>
            <Input
              type="textarea"
              onChange={handleSlugChange}
              id="slug"
              placeholder="description"
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="keywords">Keywords</Label>
          <InputGroup>
            <Input type="textarea" id="keywords" placeholder="description" />
          </InputGroup>
        </FormGroup>
        <Button className="mr-1" color="primary" onClick={handleSub}>
          Submit
        </Button>
        <Button color="secondary" onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddModal

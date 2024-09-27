import axios from 'axios';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDeleteOutline } from "react-icons/md";
import { BlogContext } from '../Context/Context';

function Delete({id}) {
  const [show, setShow] = useState(false);
  const {fetchApi} = useContext(BlogContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleDelete = ()=>{
    let apiURL = `http://127.0.0.1:8000/blogs/${id}/`

    axios.delete(apiURL)
    .then((res)=>{
        handleClose()
        fetchApi()
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <MdDeleteOutline className="icons"/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
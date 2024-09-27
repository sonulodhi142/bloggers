import { useContext, useState } from "react";
import { BlogContext } from "../Context/Context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import axios from "axios";

function EditPost({ handleClose, handleShow, show, handleEvents, id }) {
  const [postId, setPostId] = useState(id);
  const { blogs, fetchApi } = useContext(BlogContext);
  const [inputData, setInputData] = useState({title: "", image: "", description: ""});

  const getPost = (id) => {
    for(let blog of blogs){
      if(blog.id == id)
        return blog
    }
    return -1
  };

  const handleShowWithData = () => {
    handleShow();

    const data = getPost(id)
    setInputData(data);
  };

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getImage = (e) => {
    setInputData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSave = () => {
    const apiUrl = `http://127.0.0.1:8000/blogs/${id}/`;

    const form = new FormData();
    form.append('title', inputData.title);
    form.append('description', inputData.description);
    if(inputData.image){
      form.append('image', inputData.image);
    }

    axios.put(apiUrl, form,{
      headers:{
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(()=>{
      handleClose()
      fetchApi()
    })

    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowWithData}>
        <FaRegEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={inputData.title}
            onChange={getInputData}
          />
          <Form.Label>Write a Post Description</Form.Label>
          <InputGroup>
            {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="description"
              value={inputData.description}
              onChange={getInputData}
            />
          </InputGroup>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={getImage}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost;

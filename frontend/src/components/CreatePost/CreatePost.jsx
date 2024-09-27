import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { BlogContext } from "../Context/Context";
import axios from "axios";

const CreatePost = () => {
  const [show, setShow] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    image: "",
    description: "",
  });
  const { fetchApi } = useContext(BlogContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
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
    const apiUrl = `http://127.0.0.1:8000/blogs/`;

    const form = new FormData();
    form.append("title", inputData.title);
    form.append("description", inputData.description);
    if(inputData.image){
      form.append("image", inputData.image)
    }

    axios
      .post(apiUrl, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        handleClose();
        fetchApi();
      });

    console.log(inputData);

    handleClose();
  };

  return (
    <>
      <div className="posts-count" onClick={handleShow}>
        Create New Post
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" onChange={getInputData} />
          <Form.Label>Write a Post Description</Form.Label>
          <InputGroup>
            {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="description"
              onChange={getInputData}
            />
          </InputGroup>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" name="image" onChange={getImage} />
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
};

export default CreatePost;

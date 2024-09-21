import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const CreatePost = ({handleEvents, id}) => {
  const [postId, setPostId] = useState(id)
  
  function handleClick (){
    handleEvents.handleEdit(postId)
    console.log("clicked: ", postId)
  }

  return (
    <div>
      <button
        type="button"
        style={{textDecoration: 'none', border: 'none'}}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={handleClick}
      >
        <FaRegEdit/>
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create a Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ><FaWindowClose/></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1 " className="form-label bold">
                  Title
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Write description:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Select a Photo:
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Save changes {postId}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

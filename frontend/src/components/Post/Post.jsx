import React, {useState} from "react";
import PropTypes from 'prop-types'
import { MdDeleteOutline } from "react-icons/md";
import "./Post.scss";
import EditPost from "../CreatePost/EditPost";

const Post = ({ blog, size="", isLoggedIn=false, handleEvents }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serverHost = "http://127.0.0.1:8000/"


  let shortdes = blog.description
  if(shortdes.length > 50)
    shortdes = blog.description.slice(0,50) + "..."
  
  let style = size 
  
  
  let imageAddress = serverHost + blog.image
  
  return (
    <div className={`post-card ${style}`}>
      <div className="img-box">
        <img src={imageAddress} alt="" />
      </div>
      <div className="details">
        <h5>{blog.title}</h5>
        <span>Time</span>
        <p>{shortdes}</p>
      </div>
      
    
      <div className={`admin-options ${!isLoggedIn && "none"}`}>
        {/* <CreatePost className='icons edit' handleEvents={handleEvents} id={data.id}/>  */}


        <EditPost 
          handleClose={handleClose} 
          handleShow={handleShow}  
          show={show}
          handleEvents={handleEvents}
          id={blog.id}
        />

        {/* <FaRegEdit className="icons edit"/> */}
        <MdDeleteOutline className="icons delete"/>
      </div>
    </div>
  );
};

Post.propTypes = {
  blog: PropTypes.object,
  size: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  handleEvents : PropTypes.object
}

export default Post;

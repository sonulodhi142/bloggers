import React, {useState} from "react";
import PropTypes from 'prop-types'
import { BsGraphUpArrow } from "react-icons/bs";
import "./Post.scss";
import EditPost from "../CreatePost/EditPost";
import Delete from "./Delete";
import { Link } from "react-router-dom";

const Post = ({ blog, size="", isLoggedIn=false, handleEvents }) => {

  

  const [show, setShow] = useState(false);
  const [view, setView] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serverHost = "http://127.0.0.1:8000/"


  let shortdes = blog.description
  if(shortdes.length > 50)
    shortdes = blog.description.slice(0,50) + "..."
  
  let style = size 
  
  
  let imageAddress = serverHost + blog.image



  

  
  return (
    <div className={`post-card ${style}`} >
      <div className="img-box">
        <img src={imageAddress} alt="" />
      </div>
      <div className="details">
        <h5>{blog.title}</h5>
        <Link to={`/des/${blog.id}`}  > <span>{blog.created_at}</span></Link>
        <p>{shortdes}</p>
        <div className="views-area">
          <BsGraphUpArrow className="icon" /> {blog.views}
        </div>
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
        <Delete id={blog.id}/>
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

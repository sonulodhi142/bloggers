import React from "react";
import PropTypes from 'prop-types'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import "./Post.scss";

const Post = ({ data, size="", isLoggedIn=false }) => {

  let shortdes = data.description.slice(0,50) + "..."
  let style = size 
  
  return (
    <div className={`post-card ${style}`}>
      <div className="img-box">
        <img src={data.img} alt="" />
      </div>
      <div className="details">
        <h5>{data.title}</h5>
        <span>Time</span>
        <p>{shortdes}...</p>
      </div>
    
      <div className={`admin-options ${!isLoggedIn && "none"}`}>
        <FaRegEdit className="icons edit"/>
        <MdDeleteOutline className="icons delete"/>
      </div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.string,
  isLoggedIn: PropTypes.bool,
}

export default Post;

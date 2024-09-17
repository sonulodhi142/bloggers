import React from "react";
import PropTypes from 'prop-types'
import "./Post.scss";

const Post = ({ title, description, img }) => {
  const imgSrc =
    "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg";

  let shortdes = description.slice(0,50) + "..."

  return (
    <div className="post-card">
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h5>{title}</h5>
        <span>Time</span>
        <p>{shortdes}...</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Post;

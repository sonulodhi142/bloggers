import React, { useState } from "react";
import PropTypes from 'prop-types';
import { BsGraphUpArrow } from "react-icons/bs";
import "./Post.scss";
import EditPost from "../CreatePost/EditPost";
import Delete from "./Delete";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = ({ blog, size, isLoggedIn = false, handleEvents }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serverHost = "http://127.0.0.1:8000/";
  let shortdes = blog.description.length > 50 ? blog.description.slice(0, 50) + "..." : blog.description;
  let imageAddress = serverHost + blog.image;

  return (
    <div>
      <Link to={`/des/${blog.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{display: 'flex'}}>
          <Card.Img
            variant="top"
            style={size === "vertical" ? { height: "200px", objectFit: "cover" } : { height: "9rem", objectFit: "cover" }} 
            src={imageAddress}
          />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <span>{blog.created_at}</span>
            <Card.Text>{shortdes}</Card.Text>
            {isLoggedIn && (
              <div className="admin-options">
                <EditPost 
                  handleClose={handleClose} 
                  handleShow={handleShow}  
                  show={show}
                  handleEvents={handleEvents}
                  id={blog.id}
                />
                <Delete id={blog.id} />
              </div>
            )}
              
            
            <p>Views: {blog.views}</p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

Post.propTypes = {
  blog: PropTypes.object,
  size: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  handleEvents: PropTypes.object,
};

export default Post;

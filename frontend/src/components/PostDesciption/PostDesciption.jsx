import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const PostDesciption = () => {
  
  const { blogs, loading, fetchApi } = useContext(BlogContext);

  const { id } = useParams();

  useEffect(()=>{
    fetchApi();
  }, [])

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  const serverHost = "http://127.0.0.1:8000/";

  let imageAddress = serverHost + blog.image;

  const spinner = <Spinner animation="border" variant="primary" />;

  return (
    <div>
      {loading ? (
        spinner
      ) : (
        <Card>
          <Card.Img
            variant="top"
            src={imageAddress}
            style={{ width: "100%", height: "50%" }}
          />
          <Card.Body>
            <h2>{blog.title}</h2>
            <Card.Text>{blog.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PostDesciption;

import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import "./PostDesciption.css"

const PostDesciption = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const { fetchApi } = useContext(BlogContext)
  const [count, setCount] = useState(0); 

  let serverHost = "http://127.0.0.1:8000/";
  
  const fetchBlog = () => {
    const apiURL = `http://127.0.0.1:8000/blogs/${id}/`;
    
    axios.get(apiURL).then((res) => {
      setLoading(false);
      setBlog((prevBlog) => ({
        ...prevBlog,
        ...res.data,
        image: serverHost + res.data.image,
      }));
      setCount(res.data.views + 1); 
       
    });
  };

  
  useEffect(() => {
    if (count > 0) {
      const apiURL = `http://127.0.0.1:8000/blogs/${id}/`;
      const updatedData = { views: count };
  
      axios.put(apiURL, updatedData)
        .then(() => {
          fetchApi(); 
        })
        .catch((error) => {
          console.error("Error updating views:", error);
        });
    }
  }, [count]); 

  useEffect(() => {
    fetchBlog();
  }, []);

  const spinner = <Spinner animation="border" variant="primary" />;

  return (
    <div>
      {!loading ? (
        <Card>
          <Card.Img
            variant="top"
            src={blog.image}
            style={{ width: "30%", margin: "auto" }}
          />
          <Card.Body>
            <h2>{blog.title}</h2>
            <h5>views = {count}</h5>  {/* Display updated count */}
            <Card.Text>{blog.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        spinner
      )}
    </div>
  );
};

export default PostDesciption;

import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const PostDesciption = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  let serverHost = "http://127.0.0.1:8000/";
  let card;
  const show = () => {
    const apiURL = `http://127.0.0.1:8000/blogs/${id}/`;
    axios.get(apiURL).then((res) => {
      setLoading(false);
      setBlog((b) => {
        return {
          ...b,
          ...res.data,
          image: serverHost + res.data.image,
        };
      });
    });
  };
  useEffect(() => {
    show();
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

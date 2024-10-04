import React, { useContext } from "react";
import Post from "../Post/Post";
import { BlogContext } from "../Context/Context";
import Spinner from "react-bootstrap/Spinner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Posts.scss';  // Add a separate CSS/SCSS file for custom styling

const Posts = ({ isLoggedIn = false, handleEvents }) => {
  const { blogs, loading } = useContext(BlogContext);

  const spinner = (<Spinner animation="border" variant="primary" />)

  return (
    <div className="posts-container">
      <Container fluid="md">
        <h3>All Posts</h3>
        <Row>
          {loading ? (
            <Col className="d-flex justify-content-center align-items-center">
              {spinner}
            </Col>
          ) : (
            blogs.map((blog, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                className="mb-4"  // Add margin bottom for spacing between cards
              >
                <Post
                  blog={blog}
                  isLoggedIn={isLoggedIn}
                  handleEvents={handleEvents}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Posts;

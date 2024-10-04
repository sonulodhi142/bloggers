import React, { useContext } from "react";
import Post from "../Post/Post";
import "./Home.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BlogContext } from "../Context/Context";
import Spinner from "react-bootstrap/Spinner";

const Latest = () => {
  const { blogs, loading } = useContext(BlogContext);

  const upperRowData = blogs.slice(0, 2); // First 2 posts for upper section
  const lowerRowData = blogs.slice(2, 6); // Next 4 posts for lower section

  const spinner = <Spinner animation="border" variant="primary" />;

  

  return (
    <div>
      <h3>Latest</h3>
      {loading ? (
        spinner
      ) : (
        <div>
          <Container fluid="md">
            <Row>
              {upperRowData.map((blog) => (
                <Col md={6} key={blog.id} className="mb-4"> {/* Adjusted to show 2 horizontal posts */}
                  <Post blog={blog} size="horizontal" />
                </Col>
              ))}
            </Row>
          </Container>

          <br />
          <Container fluid="md">
            <Row>
              {lowerRowData.map((blog) => (
                <Col md={4} key={blog.id} className="mb-4">
                  <Post blog={blog} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Latest;

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss";
import Footer from "../Footer/Footer";
import Latest from "./Latest";
import Posts from "../Posts/Posts";
import CustomCarousel from "../carousel/CustomCarousel";

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <Container fluid>
        <Row className="justify-content-center"> {/* Center the Latest section */}
          <Col md={8}> {/* Adjust column width for centering */}
            <Latest />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5"> {/* Center the Posts section */}
          <Col md={8}> {/* Adjust column width for centering */}
            <Posts />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

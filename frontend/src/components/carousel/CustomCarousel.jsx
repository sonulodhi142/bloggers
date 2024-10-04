import React, { useContext } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { BlogContext } from "../Context/Context";

const CustomCarousel = () => {
  const { blogs } = useContext(BlogContext);

  // Get the last 3 blog posts for the carousel
  const carouselBlogs = blogs.slice(-3);

  return (
    <div className="container-fluid" style={{ height: '300px', marginTop: '100px' }}>
      <Carousel>
        {carouselBlogs.map((blog, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`http://127.0.0.1:8000/${blog.image}`} // Assuming the image path needs to be prefixed with this server address
              alt={`Slide ${index + 1}`}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h5>{blog.title}</h5>
              <p>{blog.description.slice(0, 100)}...</p> {/* Show a short description */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;

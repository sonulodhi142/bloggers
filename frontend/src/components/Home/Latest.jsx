import React, { useContext } from "react";
import Post from "../Post/Post";
import "./Home.scss"
import {BlogContext} from "../Context/Context";
import Spinner from 'react-bootstrap/Spinner';

const Latest = () => {

  const { blogs, loading } = useContext(BlogContext);
  
  

  let upperRange = 3
  let lowerRange = 4
  let vertical = "vertical"
  const upperRowData = blogs.slice(0,upperRange)
  const lowerRowData = blogs.slice(upperRange,upperRange+lowerRange)

  const spinner = (<Spinner animation="border" variant="primary" />)

  return (
    <div className="latest ">
      <h3>Latest</h3>
      {loading ? spinner : (
        <div className="posts" >
        <div className="upper-row flex">
            {upperRowData.map((blog) => <Post blog={blog} key={blog.id} size={vertical}/>)}
        </div>
        <br />
        <div className="lower-row flex">
            {lowerRowData.map(blog => <Post blog={blog} key={blog.id}/>)}
        </div>
      </div>
      )}
    </div>
  );
};

export default Latest;

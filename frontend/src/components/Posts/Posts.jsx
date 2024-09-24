import React, { useContext } from "react";
import Post from "../Post/Post";
import { BlogContext } from "../Context/Context";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Posts = ({ isLoggedIn = false, handleEvents }) => {

  const { blogs, loading } = useContext(BlogContext);

  // const row = { display: "flex", flexDirection: "row" };
  // const column = {
  //   flexDirection: "column",
  //   width: "200px",
  // };
  // const flexStyle = { display: "flex", flexDirection: "row", gap: "20px" };
  // const columnStyle = { display: "block", width: "100%" };

  // const apiUrl = "http://127.0.0.1:8000/api/blogs";
  // const [blogs, setBlogs] = useState([]);

  // function fetchApi() {
  //   axios.get(apiUrl)
  //   .then((res)=>{
  //     setBlogs(res.data);
  //   })
  //   .catch(err=>console.log(err))
  // } 

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // console.log(blogs);
  // setTimeout(() => {
  //   console.log(blogs[0]['image'])
  // }, 100);

  const spinner = (
    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
  )

  return (
    <div>
      <h3>Posts</h3>
      {loading && spinner}
      {blogs.map((blog, index) => (
        <Post
          key={index}
          blog={blog}
          isLoggedIn={isLoggedIn}
          handleEvents={handleEvents}
          // size={index > 2 ? row : column}
        />
      ))}
    </div>
  );
};

export default Posts;

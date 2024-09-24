import React, { useContext } from "react";
import Post from "../Post/Post";
import { BlogContext } from "../Context/Context";

const Posts = ({ isLoggedIn = false, handleEvents }) => {

  const { blogs } = useContext(BlogContext);

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

  return (
    <div>
      <h3>Posts</h3>
      {blogs.map((blog, index) => (
        <Post
          key={index}
          title={blog.title}
          img={blog.img}
          description={blog.description}
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

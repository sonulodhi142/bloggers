import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = ({isLoggedIn=false, handleEvents}) => {
  const data = [
    {
      id: 100,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
    {
      id: 2,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
    {
      id: 3,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
    {
      id: 4,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
    {
      id: 5,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
  ];

  // const row = { display: "flex", flexDirection: "row" };
  // const column = {
  //   flexDirection: "column",
  //   width: "200px",
  // };
  // const flexStyle = { display: "flex", flexDirection: "row", gap: "20px" };
  // const columnStyle = { display: "block", width: "100%" };

  const apiUrl = 'http://127.0.0.1:8000/blog/blogApi/';
  const [blogs , setBlogs] = useState([])

 async function fetchApi(){

  const response = await fetch(apiUrl)
  const result = await response.json()

  setBlogs(result);

 }

 useEffect(()=>{
  fetchApi();
 },[])

 console.log(blogs)

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

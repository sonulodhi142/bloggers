import React from "react";
import Post from "../Post/Post";

const Posts = () => {
  const data = [
    {
      id: 1,
      title: "React Cat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis consequuntur laborum. Nemo quis possimus maxime alias rem quos labore ullam magni aliquid natus tenetur provident vel facere praesentium harum impedit libero exercitationem architecto quia, ex sit enim tempore consequuntur.",
      img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    },
  ];

  const firstData = data[0];

  return (
    <div>
      {data.map((data) => (
        <Post
          key={data.id}
          title={data.title}
          img={data.img}
          description={data.description}
          size={"large"}
        />
      ))}
    </div>
  );
};

export default Posts;

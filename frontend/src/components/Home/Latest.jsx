import React from "react";
import Post from "../Post/Post";
import "./Home.scss"

const Latest = () => {
  const data = [
    {
      id: 1,
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

  let upperRange = 2
  let lowerRange = 4
  let vertical = "vertical"
  const upperRowData = data.slice(0,upperRange)
  const lowerRowData = data.slice(upperRange,upperRange+lowerRange)

  return (
    <div className="latest border">
      <h3>Latest</h3>
      <div className="posts">
        <div className="upper-row flex">
            {upperRowData.map(d => <Post data={d} key={d.id} size={vertical}/>)}
        </div>
        <br />
        <div className="lower-row flex">
            {lowerRowData.map(d => <Post data={d} key={d.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default Latest;

import React from "react";
import "./Home.scss";

const Tags = () => {
  let tempTags =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam perferendis deleniti delectus deserunt dolore doloribus reprehenderit magnam ea magni velit nobis modi ex et fugiat possimus eius, repellendus autem ut";
  let tags = tempTags.split(" ");

  return (
    <div className="tags">
      <h5>Tags</h5>
      <div className="tags-box">
        {tags.map((t) => (
          <span className="tag-link">{t} </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;

import React, { useContext, useEffect, useState } from "react";
import "./Admin.scss";
import Posts from "../Posts/Posts";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiUnderline, TfiWrite } from "react-icons/tfi";
import CreatePost from "../CreatePost/CreatePost";
import { BlogContext } from "../Context/Context";

const Admin = () => {
  const { loading, totalCount, totalPost } = useContext(BlogContext);
  let isLoggedIn = true;

  const handleEvents = {
    handleEdit: (postId) => {
      console.log("dataEdit: ", postId);
    },

    handleDelete: (postId) => {
      console.log("dataDeleted: ", postId);
    },
  };

  return (
    <>
      <div className="admin-panel">
        <div className="profile">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s"
              alt=""
            />
          </div>

          <div className="details">
            <p className="username">Username</p>
            <p className="email">username3435@gmail.com</p>
          </div>
        </div>

        <div className="post-data">
          <div className="views-count">
            <BsGraphUpArrow className="icon" />
            <p>
              Views: <span>{totalCount}</span>
            </p>
          </div>
          <div className="posts-count">
            <TfiWrite className="icon" />
            <p>Posts:{loading ? <span>Nan</span> : <span>{totalPost}</span>}</p>
          </div>
          <div className="posts-count">
            <TfiWrite className="icon" />
            <p>
              <CreatePost />
            </p>
          </div>
        </div>
        <Posts isLoggedIn={isLoggedIn} handleEvents={handleEvents} />
      </div>
    </>
  );
};

export default Admin;

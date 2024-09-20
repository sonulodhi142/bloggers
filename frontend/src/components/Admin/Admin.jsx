import React from "react";
import "./Admin.scss";
import Posts from "../Posts/Posts";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const Admin = () => {
  let isLoggedIn = true;

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
              Views: <span>3244</span>
            </p>
          </div>
          <div className="posts-count">
            <TfiWrite className="icon" />
            <p>
              Posts: <span>3244</span>
            </p>
          </div>
        </div>
        <Posts isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
};

export default Admin;

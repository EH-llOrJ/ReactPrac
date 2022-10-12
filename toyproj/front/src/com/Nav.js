import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../image/logoGit.png";

const Nav = () => {
  return (
    <div className="navi">
      <div className="nav-home-div">
        <img src={imgLogo} alt=""></img>
      </div>
      <div className="nav-home-div">
        <Link to="/borad">Borad</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/loginprac">LoginPrac</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/join">Join</Link>
      </div>
    </div>
  );
};

export default Nav;

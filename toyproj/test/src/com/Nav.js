import React from "react";

const Nav = () => {
  return (
    <div className="navi">
      테스트용
      <a href="/Home" className="nav-home">
        <div className="nav-home-div"></div>Home
      </a>
      <a href="/Blogs" className="nav-blogs">
        <div className="nav-home-div"></div>Blogs
      </a>
      <a href="/Home" className="nav-home">
        <div className="nav-home-div"></div>Login
      </a>
      <a href="/Home" className="nav-home">
        <div className="nav-home-div"></div>Logout
      </a>
    </div>
  );
};

export default Nav;

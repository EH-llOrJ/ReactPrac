import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Nav = ({ path, name }) => {
  const navprac = useNavigate();
  return (
    <div className="navi">
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

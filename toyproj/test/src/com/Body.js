import React from "react";
import leftimg from "../image/test.PNG";

const Body = ({ text }) => {
  return (
    <div className="body">
      <img src={leftimg}></img>
      {text}
    </div>
  );
};

export default Body;

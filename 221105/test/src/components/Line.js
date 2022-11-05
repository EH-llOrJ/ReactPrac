import React from "react";

const Line = ({ el }) => {
  console.log(el);
  return (
    <ul>
      <li>{el.num}</li>
      <li>{el.title}</li>
      <li>{el.user}</li>
      <li>{el.createAt}</li>
      <li>{el.count}</li>
    </ul>
  );
};

export default Line;

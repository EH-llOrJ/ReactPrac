import React from "react";

const Count = ({ count, setCount }) => {
  const Add = () => {
    setCount(count + 1);
  };
  const Remove = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={Add}>+</button>
      <button onClick={Remove}>-</button>
    </div>
  );
};

export default Count;

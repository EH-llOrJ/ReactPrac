import React from "react";

const Testnum = ({ num, boom }) => {
  return (
    <div data-value={num} className="divnum">
      {boom}
    </div>
  );
};

export default Testnum;

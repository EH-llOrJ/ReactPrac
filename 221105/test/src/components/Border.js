import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Line from "./Line";

const Border = () => {
  const content = useSelector((state) => state.content);
  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div className="border">
      <ul className="border-title">
        <li>번호</li>
        <li>제목</li>
        <li>작성자</li>
        <li>작성일</li>
        <li>조회수</li>
      </ul>
      <Line />
    </div>
  );
};

export default Border;

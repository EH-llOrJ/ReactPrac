import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Line from "./Line";
import { ContentFn } from "./../redux/middleware/index";

const Border = () => {
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();
  useEffect(() => {
    //    console.log(content);
    // }, [content]);
    dispatch(ContentFn.GetContent(0, 10));
  }, []);
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
      {content.map((el, index) => (
        <Line el={el} index={index + 1} />
      ))}
    </div>
  );
};

export default Border;

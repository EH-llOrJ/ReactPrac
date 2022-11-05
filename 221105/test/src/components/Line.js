import React from "react";
import { ContentFn } from "../redux/middleware";
import { useDispatch } from "react-redux";

// 키값으로 들어가야하니까 ({el})
const Line = ({ el, index }) => {
  console.log(el);
  const dispatch = useDispatch();
  function delBtn() {
    dispatch(ContentFn.DeleteContent(el.id));
    dispatch(ContentFn.GetContent(0, 10));
  }
  return (
    <ul>
      <li>{index}</li>
      <li>{el.title}</li>
      <li>{el.user}</li>
      <li>{el.createAt}</li>
      <li>{el.count}</li>
      <button onClick={delBtn}>삭제</button>
    </ul>
  );
};

export default Line;

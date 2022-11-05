import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ContentFn } from "./../redux/middleware/index";

const Write = () => {
  const dispatch = useDispatch();
  const user = useRef();
  const title = useRef();
  const text = useRef();

  function write() {
    // 예외 처리
    if (user.current.value == "") {
      alert("작성자 입력하세요");
      return;
    } else if (title.current.value == "") {
      alert("타이틀 입력하세요");
      return;
    } else if (text.current.value == "") {
      alert("내용 입력하세요");
      return;
    }

    console.log(title.current.value); // 이런 식으로 확인해보면서 코딩하기
    console.log(text.current.value); // 이런 식으로 확인해보면서 코딩하기
    dispatch(
      ContentFn.CreateContent(title.current.value, text.current.value, "유저")
    );
  }
  return (
    <div>
      <label>작성자</label> <br />
      <input ref={user} /> <br />
      <label>타이틀</label>
      <br />
      <input ref={title} />
      <br />
      <label>내용</label>
      <br />
      <textarea ref={text} />
      <br />
      <button onClick={write}>쓰기</button>
    </div>
  );
};

export default Write;

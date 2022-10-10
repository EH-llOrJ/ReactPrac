import React from "react";
import { Header, Nav, Body } from "../com";
// import { useDispatch } from "react-redux";
import { useRef } from "react";

const Join = ({}) => {
  // const dispatch = useDispatch();
  // const idInput = useRef();
  // const pwInput = useRef();
  // const userName = useSelector((state) => state.loginReducer.id);
  // const signUp = () => {
  //   dispatch(loginAction.signUp(idInput.value, pwInput.value));
  // };
  return (
    <div>
      <Header title="회원가입 테스트" />
      <Nav />
      <input placeholder="아이디"></input>
      <input placeholder="비밀번호"></input>
      <button>회원가입</button>
    </div>
  );
};

export default Join;

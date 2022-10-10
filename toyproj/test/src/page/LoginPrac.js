import React from "react";
import { Header, Nav, Body } from "../com";

const LoginPrac = () => {
  return (
    <div>
      <Header title="로그인 테스트" />
      <Nav />
      <input placeholder="아이디"></input>
      <input placeholder="비밀번호"></input>
      <button>로그인</button>
    </div>
  );
};

export default LoginPrac;

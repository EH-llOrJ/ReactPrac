import React from "react";
import { Header, Body, Nav } from "../com";

const Login = ({ login, islogin }) => {
  const setLogin = () => {
    login(true);
  };
  return (
    <div>
      <Header title="로그인 페이지" />
      <Body path="/shop" name="상점 페이지" islogin={islogin} />
      <Body path="/mypage" name="마이 페이지" islogin={islogin} />
      <button>로그인 하자</button>
    </div>
  );
};

export default Login;

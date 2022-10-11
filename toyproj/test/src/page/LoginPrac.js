import React, { useEffect, useRef } from "react";
import { Button, LoginInput } from "../com/StyledCom";
// import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/middleware/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { Header, Nav } from "../com";

const LoginPrac = () => {
  // const nav = useNavigate();
  const dispatch = useDispatch();
  const idInput = useRef();
  const pwInput = useRef();
  const userName = useSelector((state) => state.loginReducer.id);
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  const login = () => {
    dispatch(loginAction.login(idInput.value, pwInput.value));
  };

  const logout = () => {
    dispatch(loginAction.logout());
  };

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);
  return (
    <div className="div-login-ui">
      <Header title="로그인 페이지" />
      <Nav />
      <div className="center-div">
        {isLogin ? (
          <>
            <div>{userName}님 로그인 완료</div>
            <Button onClick={logout}>로그아웃</Button>
          </>
        ) : (
          <>
            <LoginInput
              placeholder="아이디"
              ref={idInput}
              onChange={(e) => {
                idInput.value = e.target.value;
              }}
            />
            <LoginInput
              placeholder="비밀번호"
              ref={pwInput}
              onChange={(e) => {
                pwInput.value = e.target.value;
              }}
            />
            <Button onClick={login}>로그인</Button>
            {/* <Button>회원가입 창</Button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPrac;

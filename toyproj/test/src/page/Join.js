import React, { useRef } from "react";
import { Button, LoginInput } from "../com/StyledCom";
// import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/middleware/loginAction";
import { useDispatch } from "react-redux";
import { Header, Nav } from "../com";

const Join = () => {
  const dispatch = useDispatch();
  const idInput = useRef();
  const pwInput = useRef();

  const signUp = () => {
    dispatch(loginAction.signUp(idInput.value, pwInput.value));
  };
  return (
    <div className="div-login-ui">
      <Header title="회원가입" />
      <Nav />
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
      <Button onClick={signUp}>회원가입</Button>
    </div>
  );
};

export default Join;

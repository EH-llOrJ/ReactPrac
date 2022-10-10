import React, { useRef, useState } from "react";
import leftimg from "../image/test.PNG";
import { Button, LoginWrap, LoginInput } from "./StyledCom";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/middleware/loginAction";
import { useDispatch, useSelector } from "react-redux";

const Body = ({ isLogin }) => {
  // Link 리액트에서 a같은 역할을 해줘요
  // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여준다.
  // 라우터간의 이동을 할수 있게 도와준다.
  // Link에 필요한 props는 to 어디로
  // to이름의 props에 이동할 경로를 넣어준다.

  // useNavigate 똑같이 페이지 이동을 도와주는 아이
  // useNavigate의 사용방법은 함수 실행 이후 반환받은 객체로 사용을 한다.
  const nav = useNavigate();
  const dispatch = useDispatch();
  const idInput = useRef();
  const pwInput = useRef();
  const [wrapState, setWrapState] = useState(true);
  const userName = useSelector((state) => state.loginReducer.id);

  const login = () => {
    dispatch(loginAction.login(idInput.value, pwInput.value));
  };

  const logout = () => {
    dispatch(loginAction.logout());
  };

  const signUp = () => {
    dispatch(loginAction.signUp(idInput.value, pwInput.value));
  };

  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.value = "";
    pwInput.value = "";
    idInput.current.value = "";
    pwInput.current.value = "";
  };

  return (
    <div className="body">
      <img src={leftimg}></img>
      <LoginWrap>
        {isLogin ? (
          <>
            <div>{userName}로그인 됨</div>
            <button onClick={logout}>로그아웃</button>
          </>
        ) : (
          <>
            {wrapState ? (
              <>
                <label>아이디: </label>
                <LoginInput
                  ref={idInput}
                  onChange={(e) => {
                    idInput.value = e.target.value;
                  }}
                />
                <label>비밀번호: </label>
                <LoginInput
                  ref={pwInput}
                  onChange={(e) => {
                    pwInput.value = e.target.value;
                  }}
                />
                <Button onClick={login}>로그인</Button>
                <Button onClick={setWrap}>회원가입 창</Button>
              </>
            ) : (
              <>
                <label>아이디: </label>
                <LoginInput
                  ref={idInput}
                  onChange={(e) => {
                    idInput.value = e.target.value;
                  }}
                />
                <label>비밀번호: </label>
                <LoginInput
                  ref={pwInput}
                  onChange={(e) => {
                    pwInput.value = e.target.value;
                  }}
                />
                <Button onClick={signUp}>회원가입진행</Button>
                <Button onClick={setWrap}>로그인 창</Button>
              </>
            )}
          </>
        )}
      </LoginWrap>
    </div>
  );
};

export default Body;

import React, { useRef, useState } from "react";
import {
  Button,
  HeaderWrap,
  HeaderContent,
  ContentBtn,
  LoginWrap,
  LoginInput,
} from "./StyledComponent";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const idInput = useRef();
  const pwInput = useRef();
  // 리액트에서 태그를 선택해야하는데 어떻게 하냐
  // useRef 함수는 current 속성을 가지고 있는 객체를 반환한다.
  // 객체에 원한느 키값에 값을 넣어줄 수도 있고, 이 값의 바뀌어도
  // 렌더링이 되지않지만 값을 계속 남아있다.
  // current = 태그가 들어온다.
  // 사용방법은 들고있고 싶은 컴포넌트에 ref props로 useRef() 반환한 객체를 넣어준다.

  const [wrapState, setWrapState] = useState(true);
  // 로그인 할 수 있는 상태와 회원가입 할 수 있는 상태를 나눠주기 위해서

  const login = () => {
    console.log(idInput, pwInput);
    // document.querySelector("태그").value = "";
    // document.querySelector("태그") == idInput.current
    idInput.current.value = "";
    pwInput.current.value = "";
  };
  const nav = useNavigate();

  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.current.value = "";
    pwInput.current.value = "";
  };
  return (
    <HeaderWrap>
      <HeaderContent>
        <ContentBtn
          onClick={() => {
            nav("/");
          }}
        >
          MAIN
        </ContentBtn>
        <ContentBtn
          onClick={() => {
            nav("/shop");
          }}
        >
          SHOP
        </ContentBtn>
      </HeaderContent>
      <LoginWrap>
        {wrapState ? (
          <>
            <label>아이디: </label>
            <LoginInput ref={idInput} />
            <label>비밀번호: </label>
            <LoginInput ref={pwInput} />
            <Button onClick={login}>로그인</Button>
            <Button onClick={setWrap}>회원가입</Button>
          </>
        ) : (
          <>
            <label>아이디: </label>
            <LoginInput ref={idInput} />
            <label>비밀번호: </label>
            <LoginInput ref={pwInput} />
            <Button onClick={login}>회원 가입</Button>
            <Button onClick={setWrap}>로그인 하실?</Button>
          </>
        )}
      </LoginWrap>
    </HeaderWrap>
  );
};

export default Header;

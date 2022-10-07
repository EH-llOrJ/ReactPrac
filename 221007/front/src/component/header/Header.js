import React from "react";
import {
  Button,
  HeaderWrap,
  HeaderContent,
  ContentBtn,
} from "./StyledComponent";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
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
    </HeaderWrap>
  );
};

export default Header;

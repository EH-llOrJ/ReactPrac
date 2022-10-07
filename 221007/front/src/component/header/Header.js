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
        <ContentBtn>MAIN</ContentBtn>
        <ContentBtn>SHOP</ContentBtn>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;

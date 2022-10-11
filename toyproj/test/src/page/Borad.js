import React from "react";
import { Header, Nav, Body } from "../com";
import { Button } from "../com/StyledCom";

const Home = () => {
  return (
    <div>
      <Header title="게시판 테스트" />
      <Nav />
      <div className="center-div-borad">
        <input placeholder="내용" style={{ width: 300 }} />
        <Button>전송</Button>
      </div>
    </div>
  );
};

export default Home;

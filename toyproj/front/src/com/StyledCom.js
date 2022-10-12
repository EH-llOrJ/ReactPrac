import styled from "styled-components";
// 마켓 플레이스 가면 vscode-styled-components 설치하면 편함

const Button = styled.button`
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  background-color: #868e96;
  margin: 5px;
  &:hover {
    background-color: #3bc9db;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderContent = styled.ul`
  display: flex;
  list-style: none;
`;

const ContentBtn = styled.li`
  color: white;
  cursor: pointer;
  margin-left: 20px;
  padding: 10px;
`;

const LoginWrap = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: black;
  flex-wrap: wrap;
`;

const LoginInput = styled.input`
  height: 30px;
  margin: 0;
  padding: 10px;
  border: 1px dotted gray;
  margin: 0px 10px;
`;

export { Button, HeaderWrap, HeaderContent, ContentBtn, LoginWrap, LoginInput };

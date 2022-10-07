import styled from "styled-components";
// 마켓 플레이스 가면 vscode-styled-components 설치하면 편함

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
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

export { Button, HeaderWrap, HeaderContent, ContentBtn };

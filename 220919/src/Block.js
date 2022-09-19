import React from "react";

const Block = (props) => {
  let { data, test, name } = props;
  let temp = "";
  if (name == "user") {
    temp = test;
  } else if (name == "com") {
    // temp = "난 컴퓨터";
    temp =
      test == "무승부"
        ? "무승부"
        : test == "이겼다"
        ? "졌다"
        : test == "졌다"
        ? "이겼다"
        : (temp = "");
    // 삼항연산 x == y : true : false
    // test == "무승부" ? 유저가 무승부면 뒤에 true가 "무승부" 이고 false가
    // test == "이겼다" ? "졌다" : "이겼다" 이 삼항 연산자
  }
  return (
    <div className="block">
      {/* 선택한 이미지를 props값으로 받아온다.
            부모 컴포넌트에서 */}
      {/* 리액트에서 제일 많이 쓸거다 값이 있으면 그려라라는 구문 && */}
      {/* 값이 없으면 오류를 밷어내기 때문에 */}
      <div>{name}</div>
      <img src={data && data.img} />
      <div>{temp}</div>
    </div>
  );
};

export default Block;

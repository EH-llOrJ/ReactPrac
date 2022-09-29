import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = ({ count, setCount }) => {
  // useDispatch 함수를 사용하고
  const dispatch = useDispatch();
  // 반한된 dispatch를 사용해서 Action을 던질 수 있다.

  /*
  dispatch 함수를 사용하는데 매개변수로 객체를 전달해준다.
  객체의 규칙은 {type, payload}
  type : 동작시킬 행동의 이름
  payload : 선택사항 즉, 있어도 되고 없어도 되는데 우리가 데이터 전달이 필요하면 사용
  */

  const Add = () => {
    dispatch({ type: "ADD" });
    setCount(count + 1);
  };
  const Remove = () => {
    dispatch({ type: "REMOVE" });
    setCount(count - 1);
  };

  // 저장소의 값을 가져와보자
  const count2 = useSelector((state) => state.count);
  // useSelector 함수를 콜백으로 리듀스 폴더 안에 있는 index.js에 작성한 state값을 받을 수 있다.
  // (state) => state.count 저장소의 state 객체 안에 있는 count 값만 가져온다.

  return (
    <div>
      <button onClick={Add}>+</button>
      <button onClick={Remove}>-</button>
    </div>
  );
};

export default Count;

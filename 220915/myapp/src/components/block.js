import { React, useState } from "react";

// 리액트가 왜 리액트인지 반응한다.
// 자기 값이 변하면 반응해서 알려주고 리액트는 반응한 애를 그려줌
// 리렌더링
const Block = ({ num }) => {
  let count = 0;
  /*
  useState 함수를 사용해서 받는 값은
  배열의 첫 번째는 실사용 값 우리가 사용할 값이고 주시하는 값
  배열의 두 번째는 이 값을 수정할 수 있는 함수 주시하는 값을 바꾸려면
  여기서는 setnum 함수를 사용해서만 state값을 바꿀 수 있다.
  setnum 함수를 사용해서 값을 수정할 땐 setnum 함수의 매개변수로 전달
  함수 사용
  일반 변수는 다시 그려주면 초기값으로 변한다.
  이유는 리렌더링 하기 때문인데 하지만 useState 값은
  리액트가 보고 관리하고 있기 때문에 그려주기 전에 값을 보관하기에
  값이 남아있다.
  react에서 제공해주는 useState 이런 유용한 함수들이 많은데
  이걸 용어로 리액트 훅이라고 부른다. (react hook)
  */
  const [num1, setnum] = useState(0);
  // useState는 const로 해야함 재할당되면 안되기 때문에
  function add() {
    count++;
    setnum(num1 + 1);
    // 실수가 잦은 현상 뒤에 콘솔로그 해도 비동기적으로 돌아가기 때문에
    // 콘솔 값이 변하기 전에 동작해서 바뀌기 전값이 보이는 현상
    // console.log(num1);
  }
  return (
    <>
      {/* 변수를 바꾼다고 태그에 변수값 넣은게 바뀌지 않았다.
          document.querySelector('태그명').innerHTML = '값'
          useState 리액트에게 값을 주시하게 만들고 변하면
          내가 변했으니까 반응 알려줌 나 다시 그려줘라
          변수를 전부 보고 다 그린다하면 처음에 dom그리는 비용이
          생각보다 비싸기에 많이 그리면 컴퓨터가 미쳐서 줄여주는 것.
          결론은 효율적으로 관리해주기 위해서 사용한다.
       */}
      {/* onclick 이거였지만 리액트 어트리뷰트는 onClick */}
      <div className="block">{num1}</div>
      <button onClick={add}>더하기</button>
    </>
  );
};

//rafce
export default Block;

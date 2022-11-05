// 초기값 설정
let init = {
  // 게시판 글을 담아둘 배열
  content: [
    {
      num: 1,
      title: "첫번째",
      user: "나",
      createAt: new Date().getTime(),
      count: 0,
    },
  ], // 게시판이니까 배열로 넣음
  index: 0,
  count: 10,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  // type이 행동의 이름
  // payload 전달한 값을 받아옴
  switch (type) {
    // 상태표시는 다 대문자로 규칙임 create (x) => CREATE (o)
    case "CREATE":
      console.log("글 등록");
      return { ...state }; // break 가 아닌 값을 반환해줘야 함 주소가 바뀌어야 값이 변했다고 인지하고 업데이트 하기 때문에

    case "GETLISTCONTENT":
      console.log("글 조회");
      // console.log(payload);
      return { ...state, content: payload.data };

    case "DELCONTENT":
      return { ...state };

    default:
      return state;
  }
}

export default reducer;

let init = {
  id: "",
  pw: "",
  isLogin: false,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      console.log("로그인(리듀서 부분)");
      return { ...state, id: payload.id, pw: payload.pw, isLogin: true };

    case "LOGOUT":
      console.log("로그아웃(리듀서 부분)");
      return { ...state, id: "", pw: "", isLogin: false };

    default:
      return state;
  }
}

export default reducer;

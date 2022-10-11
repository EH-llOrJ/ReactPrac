let init = {
  id: "",
  pw: "",
  isLogin: false,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      alert("로그인 됐다???");
      console.log(payload);
      return { ...state, id: payload.id, pw: payload.pw, isLogin: true };
    case "LOGOUT":
      alert("로그아웃 완료");
      return { ...state, id: "", pw: "", isLogin: false };

    default:
      return state;
  }
}

export default reducer;

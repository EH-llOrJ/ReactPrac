let init = {
  id: "",
  pw: "",
  isLogin: false,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      console.log("여긴 로그인");
      return;

    default:
      return state;
  }
}

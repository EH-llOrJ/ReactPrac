function login(id, pw) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN", payload: { id, pw } });
  };
}

function logout(id, pw) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT", payload: { id: "", pw: "" } });
  };
}

export const logins = { login, logout };

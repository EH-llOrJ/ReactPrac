let init = {
  count: 0,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "A":
      return;

    default:
      return state;
  }
}

export default reducer;

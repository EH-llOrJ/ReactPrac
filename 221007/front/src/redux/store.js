import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore("리듀서 넣을 거임", applyMiddleware(thunk));

export default store;

import { createStore, applyMiddleware } from "redux";
// redux모듈 저장소 만드는 함수 createStore
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
// 리듀서 함수 전달 예정 createStore() 매개변수로

export default store;

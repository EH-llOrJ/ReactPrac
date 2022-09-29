import { createStore } from "redux";
import reducer from "./reducer";
// createStore는 저장소를 만들어준다.
// createStore의 매개변수로는 reducer 리듀서를 전달해준다.

/*
순서
저장소를 리듀서에 추가해서 저장소를 만들고 저장소를 Provider로 적용시키고 App컴포넌트에 적용시키는 구조
*/

let store = createStore(reducer);

// 하나만 내보내 줄 것이니까 default
export default store;

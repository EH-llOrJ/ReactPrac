/*
redux에서 지원해주는 함수
리듀서 함수를 합쳐준다 하나로 합쳐준다(번들링)
combineReducers() 함수에 객체로 전달하면 끝
객체로 전달하면 그냥 몇 개가 있든 합쳐준다 리듀서 함수를
저장소에 합쳐진 리듀서 함수가 반영된다.
*/

import { combineReducers } from "redux";
import login from "./login";
import weather from "./weather";

const rootReducer = combineReducers({ login, weather });

export default rootReducer;

import axios from "axios";

/*
axios

axios는 브라우저
자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할 때
axios를 쓰는 편이다. 속성은 url은 필수이며, 나머지는 전달을 안해도 상관없다. (옵션)
method는 지정 안하면 기본이 디폴트가 Get방식

axios 설치 명령어
npm i axios

Get 요청 방식

*/

function getWeather(name) {
  // thunk가 해주는 일이 Action Creators라는 함수를 만들어주는 것.
  // Action Creators 함수는 함수를 반환한다.
  // thunk는 dispatch를 딜레이 시켜주는 역할
  // action 함수는 함수를 반환한다.
  // dispatch랑 getState 둘 다 함수다.
  return async (dispatch, getState) => {
    const data = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=aac296175cd89d42d50c6e41a5850b8f`,
    });
    console.log(data);
    console.log(getState());
    dispatch({ type: "GET_WEATHER_DATA", payload: data });
    console.log(getState());
    // getState() 함수는 store 저장소에 있는 state 객체를 반환해준다.
  };
}

export const weather = { getWeather };
// 가독성을 위해 이름 바꿔서 사용하려고
// ex) export const weather = {getWeather, getWeather2, getWeather3, 등등}

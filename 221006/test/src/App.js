import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { weather, logins } from "./middleware";
import axios from "axios";
import { useEffect, useState } from "react";
/*
axios

Get 요청 방식
axios({ url : '' });

Post 요청 방식
axios({
  // method 기본이 Get
  method : 'post',
  url : '',
  data : {
    // 넘겨줄 값을 넣어주면 된다.
  }
});
*/

function App() {
  const dispatch = useDispatch();
  // async function getWeather() {
  //   const data = await axios({
  //     url: "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aac296175cd89d42d50c6e41a5850b8f",
  //   });
  //   console.log(data);
  // }
  // getWeather();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  };

  const weatherData = useSelector((state) => state.weather.weatherData);
  // reducer를 나눴기 때문에 즉, index.js 에서 login, weather를 나눴기에 state.weatherData에서 state.weather.weatherData로 수정해줘야한다.
  const isLogin = useSelector((state) => state.login.isLogin);
  const userName = useSelector((state) => state.login.id);

  useEffect(() => {
    // getWeather("Seoul");
    console.log(weatherData);
  }, [weatherData]);

  const login = () => {
    dispatch(logins.login(id, pw));
  };

  const logout = () => {
    dispatch(logins.logout());
  };

  return (
    <div className="App">
      <label>도시 이름</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getWeather(name);
        }}
      >
        날씨 검색
      </button>
      <div>
        도시 이름은 {weatherData && weatherData.data?.name}
        이고 현재 날씨는 : {weatherData && weatherData.data?.weather[0]?.main}
        {/* 지금 {weatherData.data.name} 없을 때 터지니까 &&와 ?를 사용해서 오류 처리 즉, 리렌더링 될 때 값이 없으면 터지기 때문에 이런 식으로 리액트는 작성을 많이 하게 된다? */}
      </div>
      <br />
      <label>아이디</label>
      <br />
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <label>비밀번호</label>
      <br />
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <button onClick={login}>로그인</button>
      <div>로그인 됐니?</div>
      {isLogin ? (
        <div>
          {userName} 유저 로그인 됐다 <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <div> 로그인 안됐다</div>
      )}
    </div>
  );
}

export default App;

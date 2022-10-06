import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { weather } from "./middleware";
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
  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  };
  const weatherData = useSelector((state) => state.weatherData);
  useEffect(() => {
    // getWeather("Seoul");
    console.log(weatherData);
  }, [weatherData]);

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
        지금 {weatherData && weatherData.data?.name}
        날씨는 : {weatherData && weatherData.data?.weather[0]?.main}
        {/* 지금 {weatherData.data.name} 없을 때 터지니까 &&와 ?를 사용해서 오류 처리 즉, 리렌더링 될 때 값이 없으면 터지기 때문에 이런 식으로 리액트는 작성을 많이 하게 된다? */}
      </div>
    </div>
  );
}

export default App;

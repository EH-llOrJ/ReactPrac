import { useDispatch } from "react-redux";
import "./App.css";
import { weather } from "./middleware";
import axios from "axios";
import { useEffect } from "react";
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
  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  };

  useEffect(() => {
    getWeather("Seoul");
  }, []);

  return <div className="App">test</div>;
}

export default App;

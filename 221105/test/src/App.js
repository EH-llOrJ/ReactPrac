import "./App.css";
import { useDispatch } from "react-redux";
import Border from "./components/Border";
// import { ContentFn } from "./redux/middleware/index";
import { Routes, Route } from "react-router-dom";
import Write from "./page/Write";

function App() {
  const dispatch = useDispatch();

  // function test() {
  //   dispatch(ContentFn.CreateContent());
  //   // 테스트 해본 거니까 지우고
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Border />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;

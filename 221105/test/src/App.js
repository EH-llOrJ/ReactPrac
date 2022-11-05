import "./App.css";
import { useDispatch } from "react-redux";
import Border from "./components/Border";
import { ContentFn } from "./redux/middleware/index";

function App() {
  const dispatch = useDispatch();

  function test() {
    dispatch(ContentFn.CreateContent());
  }

  return (
    <div className="App">
      <Border />
      <button onClick={test}>테스트</button>
    </div>
  );
}

export default App;

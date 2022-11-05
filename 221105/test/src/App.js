import "./App.css";
import { useDispatch } from "react-redux";
import Border from "./components/Border";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Border />
    </div>
  );
}

export default App;

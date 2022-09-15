import "./App.css";
import Block from "./components/block";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      {/** 배열의 갯수만큼 반복하면서 컴포넌트 생성 및 props 전달 */}
      {arr.map((el) => (
        <Block num={el} />
      ))}
    </div>
  );
}

export default App;

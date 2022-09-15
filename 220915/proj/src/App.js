import "./App.css";
import Testnum from "./prac/Test";

function App() {
  const arr = [];
  const randomArr = [];
  for (let i = 1; i <= 5; i++) {
    randomArr.push(Math.floor(Math.random() * 25));
    console.log(randomArr);
  }
  for (let i = 1; i <= 25; i++) {
    arr.push(i);
  }
  return (
    <div className="App">
      {arr.map((el) => (
        <Testnum num={el} />
      ))}
    </div>
  );
}

export default App;

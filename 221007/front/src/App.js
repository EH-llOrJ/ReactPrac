import { Routes, Route } from "react-router-dom";
import { Main, Shop } from "./page";
import { Header } from "./component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;

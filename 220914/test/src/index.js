import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root 태그 선택자로 가져와서 root 안의 내용을 계속 그려준다
// React.StrictMod 오류나 로그를 띄워주는 아이 엄격모드 같은?
root.render(<App />);

reportWebVitals();

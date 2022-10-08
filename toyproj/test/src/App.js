import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Login, MyPage, Borad, Blogs, LoginPrac, Join } from "./page";
import { useState } from "react";
function App() {
  // Route : 페이지들을 정의해준다. Route에는 props 값이 두개 필요한데
  // path랑 element
  // path는 경로 (보여줄 컴포넌트들을 보여줄 경로)
  // element는 보여줄 경로의 컴포넌트(path에 해당되는 경로에서 보여줄 컴포넌트)

  const [login, setLogin] = useState(false);
  // 로그인이 되어있는지 확인함 useState

  // 페이지를 접속할 때 권한이 필요해서 막아야할 페이지 처리
  // 페이지를 보호하는 법 리다이렉트를 해주는 방법
  // Navigate라는 컴포넌트를 사용해서 리다이렉트를 하게 만들어 줄 수 있다.
  // reate-router-dom가 지원해주는 컴포넌트
  // props를 받는데 to 한 개 주면 된다. 보내주고 싶은 경로

  // Redirect 컴포넌트를 만들어 준 것.
  // 로그인이 안됐으면 메인페이지로 보내버린다. 경로를
  const Redirect = () => {
    return login === true ? <MyPage /> : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main islogin={login} />} />
        <Route
          path="/login"
          element={<Login islogin={login} login={setLogin} />}
        />
        <Route path="/mypage" element={<Redirect />} />
        <Route path="/borad" element={<Borad />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/loginprac" element={<LoginPrac />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;

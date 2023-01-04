import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ChatPage from "./components/ChatPage/ChatPage";

function App() {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<ChatPage />}></Route>
      {/* 로그인 페이지 */}
      <Route path="/login" element={<LoginPage />}></Route>
      {/* 회원가입 */}
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;

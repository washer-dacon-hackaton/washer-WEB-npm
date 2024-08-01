import { Routes, Route } from "react-router-dom";

// 레이아웃
import MainLayout from "./pages/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";

import "./App.css";

// 페이지

function App() {
  return (
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/user" element={<UserPage></UserPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

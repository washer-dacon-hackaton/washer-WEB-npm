import { Routes, Route } from "react-router-dom";

// 레이아웃
import MainLayout from "./pages/layouts/MainLayout";
import MainPage from "./pages/MainPage";

import "./App.css";

// 페이지

function App() {
  return (
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

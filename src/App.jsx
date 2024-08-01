import { Routes, Route } from "react-router-dom";

// 레이아웃
import MainLayout from "./pages/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import UserLikePage from "./pages/UserLikePage";
import UserWritePage from "./pages/UserWritePage";

import "./App.css";
import PostPage from "./pages/PostPage";
import PostWritePage from "./pages/PostWritePage";
import ReportPage from "./pages/ReportPage";

// 페이지
function App() {
  return (
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/user" element={<UserPage></UserPage>}></Route>
        <Route
          path="/user/like"
          element={<UserLikePage></UserLikePage>}
        ></Route>
        <Route
          path="/user/write"
          element={<UserWritePage></UserWritePage>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path={`/post/write`}
          element={<PostWritePage></PostWritePage>}
        ></Route>
        <Route path={`/post/:id`} element={<PostPage></PostPage>}></Route>
        <Route path={`/test`} element={<TestPage></TestPage>}></Route>
        <Route
          path={`/user/report/:id`}
          element={<ReportPage></ReportPage>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;

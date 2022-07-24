import { Global } from "@emotion/react";
import { globalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "pages/login";
import SignUpPage from "pages/signUp";
import MainPage from "pages/main";
import NewPage from "pages/main/new";
import DetailPage from "pages/main/[id]";
import EditPage from "pages/main/[id]/edit";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          {/* 로그인페이지 */}
          <Route path="/" element={<LoginPage />} />
          {/* 회원가입페이지 */}
          <Route path="/signUp" element={<SignUpPage />} />
          {/* 로그인 후 메인페이지 */}
          <Route path="/:id/main" element={<MainPage />} />
          {/* 로그인 후 글 작성하기 */}
          <Route path="/:id/new" element={<NewPage />} />
          {/* 로그인 후 게시글 디테일 페이지 */}
          <Route path="/:id" element={<DetailPage />} />
          {/* 로그인 후 게시글 수정 페이지 */}
          <Route path="/:id/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

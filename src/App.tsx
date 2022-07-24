import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "pages/login";
import SignUpPage from "pages/signUp";
import MainPage from "pages/main";
import NewPage from "pages/main/new";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/:id" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

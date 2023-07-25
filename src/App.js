import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navi from "./components/Navi";
import Home from "./page/Home";
import Todo from "./page/Todo";
import Sample from "./page/Sample";

const GlobalStyle = createGlobalStyle`
  body {
    background:#eee;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

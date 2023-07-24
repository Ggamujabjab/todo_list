import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Navi from "./components/Navi";
import Home from "./page/Home";
import Todo from "./page/Todo";

// Div 태그
const divTag = styled.div``;
const pTag = styled.p``;

const LayoutWrap = styled.div`
  padding:20;
  border:5px solid gray;
`;

function App() {
  return (
    <BrowserRouter>
      <LayoutWrap>
        <Navi></Navi>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </LayoutWrap>
    </BrowserRouter>
  );
}

export default App;

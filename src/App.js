import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./page/Home";
import Photo from "./page/Photo";
import Room from "./page/Room";

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
        <Link to="/">홈</Link>
        <Link to="/photo">사진</Link>
        <Link to="/room">방 소개</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </LayoutWrap>
    </BrowserRouter>
  );
}

export default App;

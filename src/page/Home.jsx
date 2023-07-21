import React from 'react';
import styled from "styled-components";

// 공통 태그
const HeadTag = styled.h1``;
const DivTag = styled.div``;
const PTag = styled.p``;

const TitleTag = styled(HeadTag)`
    font-size:30px;
    color:#ff0000;
`;

function Home(){
    return (
        <TitleTag>Home 페이지 입니다.</TitleTag>
    )
}

export default Home;
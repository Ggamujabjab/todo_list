import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

// 공통 태그
const UlTag = styled.ul`
    display:flex;
    margin:0;
    padding:20px;
`;
const LiTag = styled.li`
    margin:0 10px  0 0;
    padding:0;
    list-style:none;
`;
const LinkTag = styled(Link)`
    display:inline-block;
    padding:10px 15px;
    font-weight:bold;
    color:#ff0000;
    text-decoration:none;
    border:2px solid #ccc;
`;

const MenuUl = styled(UlTag)``;
const MenuLi = styled(LiTag)``;

function Navi(){
    return (
        <>
            <MenuUl>
                <MenuLi><LinkTag to="/">Home</LinkTag></MenuLi>
                <MenuLi><LinkTag to="/todo">Todo</LinkTag></MenuLi>
            </MenuUl>
        </>
    )
}

export default Navi;
import React, { Fragment } from 'react';
import styled from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodolTemplateBlock = styled.div`
    border:1px solid #ff0000;
`;

function TodoTemplate({ children }){
    return <TodolTemplateBlock>{children}</TodolTemplateBlock>;
}

export default TodoTemplate;
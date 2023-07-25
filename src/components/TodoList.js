import React, { Fragment } from 'react';
import styled from "styled-components";
import TodoItem from "../components/TodoItem";

// 공통 태그
const DivTag = styled.div``;

const ListForm = styled(DivTag)``;

function TodoList(props){
    // 목록
    const todoListItem = props.todoData.map(( item, index ) => {
        return <TodoItem key={index} data={item} index={index} evtListCheck={props.evtListCheck} />;
    });
    
    return (
        <Fragment>
            <ListForm>
                {todoListItem}
            </ListForm>
        </Fragment>
    )
}

export default TodoList;
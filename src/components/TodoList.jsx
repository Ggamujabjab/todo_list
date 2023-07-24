import React, { Fragment } from 'react';
import styled from "styled-components";
import TodoItem from "../components/TodoItem";

// 공통 태그
const DivTag = styled.div``;

const ListForm = styled(DivTag)``;

function TodoList(props){
    console.log(props.todoData);
    return (
        <Fragment>
            <ListForm>
                { props.todoData.map(( item, index ) => {
                    return <TodoItem key={index} data={item} index={index} />;
                })}
            </ListForm>
        </Fragment>
    )
}

export default TodoList;
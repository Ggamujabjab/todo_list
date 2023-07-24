import React, { Fragment, useState } from 'react';
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Todo(){
    const [todoCount, setTodoCount] = useState(1);
    const [todoInputText, setTodoInputText] = useState("너무 좋아");
    const [todoData, setTodoData] = useState([]);

    // 현재 idx 카운트
    const evtAutoCount = () => {
        setTodoCount(todoCount + 1);
    };
    
    // 입력 목록 텍스트
    const evtInputValue = (value) => {
        setTodoInputText(value);
    };

    // 목록 리스트 생성
    const evtListCreate = () => {
        setTodoData(( currentArray ) => [...currentArray, { idx : todoCount, check : false, text : todoInputText }]);
    };
    
    return (
        <Fragment>
            <TodoInput propsText={todoInputText} evtAutoCount={evtAutoCount} evtInputValue={evtInputValue} evtListCreate={evtListCreate} />
            <TodoList todoData={todoData} />
        </Fragment>
    )
}

export default Todo;
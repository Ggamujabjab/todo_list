import React, { Fragment, useState } from 'react';
import styled from "styled-components";

// 공통 태그
const DivTag = styled.div``;
const FormTag = styled.form``;
const InputTag = styled.input``;
const ButtonTag = styled.button``;

const SearchForm = styled(DivTag)``;
const SearchInput = styled(InputTag)``;
const SearchBtn = styled(ButtonTag)``;

function TodoInput(props){
    // Input 입력값 저장
    const [inputValue, setInputValue] = useState("");

    // Submit Form
    const evtSubmitForm = (e) => {
        // 기본기능삭제
        e.preventDefault();

        console.log(inputValue);

        // 리스트 목록 카운트
        props.evtAutoCount();
        // 리스트 목록 텍스트 저장
        props.evtInputValue(inputValue);
        // 리스트 목록 저장
        props.evtListCreate(inputValue);
    }

    // 검색어 텍스트 저장
    const evtChangeValue = (e) => {
        // 현재 입력한 텍스트값
        setInputValue(e.target.value);

        // 입력텍스트
        props.evtInputValue(e.target.value);
    }

    return (
        <Fragment>
            <SearchForm onSubmit={evtSubmitForm}>
                <FormTag>
                    <SearchInput value={props.propsText} onChange={evtChangeValue} />
                    <SearchBtn type="submit">추가</SearchBtn>
                </FormTag>
            </SearchForm>
        </Fragment>
    )
}

export default TodoInput;
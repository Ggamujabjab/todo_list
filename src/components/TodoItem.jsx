import React, { Fragment, useState } from 'react';
import styled from "styled-components";

// 공통 태그
const DivTag = styled.div``;
const InputTag = styled.input``;
const LabelTag = styled.label``;

const ListForm = styled(DivTag)``;
const ListLabel = styled(LabelTag)`
    border:none;
    background:transparent;
`;

function TodoItem(props){
    const [index, setIndex] = useState(`cnt_item${props.index}`);

    // 활성화
    const evtListActive = () => {
        console.log(props.data.check);
    };

    return (
        <Fragment>
            <ListForm>
                <InputTag type="checkbox" id={index} checked={props.data.check} onChange={evtListActive} />
                <ListLabel for={index}>{props.data.text}</ListLabel>
            </ListForm>
        </Fragment>
    )
}

export default TodoItem;
import React, { useReducer, useState } from 'react';

function reducer(state, action){
    switch (action.type){
        case "INCREMENT" :
            return state + 1;
        case "DECREMENT" :
            return state - 1;
        default :
            return state;
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer, 3);
    //const [number, dispatch] = useReducer(reducer, 0);
    //const [number, setNumber] = useState();

    const onIncrease = () => {
        dispatch({ type : "INCREMENT" });
        //setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        dispatch({ type : "DECREMENT" });
        //setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    );
}

export default Counter;
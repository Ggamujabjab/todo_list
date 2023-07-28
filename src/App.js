import React, { useRef, useCallback, useReducer, useMemo, useState } from "react";
import UserList from "./page/UserList";
import CreateUser from "./page/CreateUser";

/*
  const { user, setUser } = useState("");
  const ref = useRef();
  useEffect(() => {
    return (() => {

    })
  });
  useMemo(() => fucntion(user), [user]); // 연산을 위한 함수
  useCallback(() => {}) // 함수 재사용
  React.memo() // 리렌더링 방지.
  const OnCreate = () => {}
*/

function countActiveUsers(users){
    console.log("활성 사용자 수를 세는중...");

    return users.filter(user => user.active).length;
}

// 배열 데이터 initialState 
const initialState = {
  inputs : {
    username : "",
    email : ""
  },
  users : [
    {
      id : 1,
      username : "velopert",
      email : "public.velopert@gmail.com",
      active : true
    },
    {
      id : 2,
      username : "tester",
      email : "tester@gmail.com",
      active : false
    },
    {
      id : 3,
      username : "liz",
      email : "liz@gmail.com",
      active : false
    }
  ]
};

function reducer(state, action){
  switch(action.type){
    case "CHANGE_INPUT" :
      return {
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      }
    case "CREATE_USER" : 
      return {
        inputs : initialState.inputs, // Input 값을 추가후 초기값 공백으로 변경(initialState를 사용)
        //inputs : state.inputs, // 입력값을 유지를 하려면 state를 사용
        users : [
          ...state.users,
          action.user
        ]
      }
    case "REMOVE_USER" : 
      return {
        ...state,
        users : state.users.filter(( user ) => user.id !== action.id )
      }
    case "TOGGLE_USER" :
      return {
        ...state,
        users : state.users.map(( user ) => {
          return user.id === action.id ? { ...user, active : !user.active } : user
        })
      }
    default : 
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  // Change 이벤트
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      
      dispatch({
        type : "CHANGE_INPUT",
        name,
        value
      });
    }, []
  );

  // Click 이벤트(목록 생성)
  const onCreate = useCallback(
    () => {
      dispatch({
        type : "CREATE_USER",
        user : {
          id : nextId.current,
          username,
          email,
          active : false
        }
      });

      // ID값 증가
      nextId.current++;
    }, [username, email]
  );
  const onRemove = useCallback(
    (id) => {
      dispatch({
        type : "REMOVE_USER",
        id
      })
    }, []
  )
  const onToggle = useCallback(
    (id) => {
      dispatch({
        type : "TOGGLE_USER",
        id
      })
    }, []
  )

  const count = useMemo(() => countActiveUsers(users), [users]);

  const [ value, setValue ] = useState(true);

  // users 데이터가 변경이 됐을경우
  //const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        //inputName={inputName}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}
// 배열 추가 ...스프레드시트 OR concat 으로 객체 내용 추가 : [ ...users, obj ];
// 배열 삭제 Fileter 사용 : users.filter( user => user.id !== id );

export default App;

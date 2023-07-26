import React, { useState, useRef } from "react";
import UserList from "./page/UserList";
import CreateUser from "./page/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
      username : "",
      email : ""
  });
  const { username, email } = inputs;
  const onChange = e => {
      const { name, value } = e.target;
      setInputs({
          ...inputs,
          [name] : value
      });
  }

  // 배열 데이터
  const [users, setUsers] = useState([
    {
        id : 1,
        username : "velopert",
        email : "public.velopert@gmail.com",
        active : true
    }, {
        id : 2,
        username : "tester",
        email : "tester@gmail.com",
        active : false
    }, {
        id : 3,
        username : "liz",
        email : "liz@gmail.com",
        active : false
    }
  ]);
  const inputName = useRef();
  const nextID = useRef(10);
  const nextId = useRef(4);
  const onCreate = () => {
      const user = {
        id : nextId.current,
        username,
        email
      }
      setUsers([
        ...users,
        user
      ]);
      setUsers(users.concat(user));

      setInputs({
          username : "",
          email : ""
      });

      // 초기화 했을경우 포커스
      inputName.current.focus();

      // 배열의 ID값을 갱신을 위한 +1
      nextId.current += 1;
  }
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        inputName={inputName}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
      />
    </>
  );
}
// 배열 추가 ...스프레드시트 OR concat 으로 객체 내용 추가 : [ ...users, obj ];
// 배열 삭제 Fileter 사용 : users.filter( user => user.id !== id );

export default App;

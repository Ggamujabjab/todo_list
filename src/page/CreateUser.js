import React from 'react';

function CreateUser({ username, email, inputName, onChange, onCreate }){
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
                ref={inputName}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button type="button" onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser;
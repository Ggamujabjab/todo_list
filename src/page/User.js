import React from 'react';

function User({ user, onRemove }){
    const {username, email} = user;

    return (
        <div>
            <b>{username}</b>
            <span>({email})</span>
            <button type="button" onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

export default User;
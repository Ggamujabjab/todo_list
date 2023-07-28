import React from 'react';

function User({ user, onRemove, onToggle }){
    const { id, username, email, active } = user;

    console.log(username, email, active);

    return (
        <div>
            <b style={{ color : active ? "green" : "black", cursor : "pointer" }} onClick={() => onToggle(user.id)}>{username}</b>
            <span>({email})</span>
            <button type="button" onClick={() => onRemove(id)}>삭제</button>
        </div>
        /*
        <div>
            <b style={{ color : user.active ? "green" : "black", cursor : "pointer" }} onClick={() => onToggle(user.id)}>{username}</b>
            <span>({email})</span>
            <button type="button" onClick={() => onRemove(user.id)}>삭제</button>
        </div>
        */
    );
}

export default React.memo(User);
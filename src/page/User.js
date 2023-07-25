import React from 'react';

function User({ user }){
    const {username, email} = user;

    return (
        <div>
            <b>{username}</b>
            <span>({email})</span>
        </div>
    );
}

export default User;
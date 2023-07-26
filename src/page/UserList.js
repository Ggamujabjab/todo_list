import React, { useRef } from 'react';
import User from "../page/User";

function UserList({ users, onRemove }){
    // 배열 목록
    const unitList = users.map(( item ) => {
        console.log(item);
        return <User key={item.id} user={item} onRemove={onRemove} />;
    });

    return (
        <div>
            <h1>배열 리스트</h1>
            <div>
                {unitList}
            </div>
        </div>
    )
}

export default UserList;
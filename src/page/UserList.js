import React, { useEffect, useRef } from 'react';
import User from "../page/User";

function UserList({ users, onRemove, onToggle }){
    const unitList = users.map(( item ) => {
        return <User key={item.id} user={item} onRemove={onRemove} onToggle={onToggle} />
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

/*function UserList({ users, onRemove, onToggle }){
    console.log("UserList");

    // 배열 목록
    const unitList = users.map(( item ) => {
        return <User key={item.id} user={item} onRemove={onRemove} onToggle={onToggle} />;
    });

    return (
        <div>
            <h1>배열 리스트</h1>
            <div>
                {unitList}
            </div>
        </div>
    )
}*/

export default React.memo(UserList);
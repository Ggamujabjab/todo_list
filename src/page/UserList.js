import React from 'react';
import User from "../page/User";

function UserList(){
    // 배열 데이터
    const users = [{
        id : 1,
        username : "velopert",
        email : "public.velopert@gmail.com"
    }, {
        id : 2,
        username : "tester",
        email : "tester@gmail.com"
    }, {
        id : 3,
        username : "liz",
        email : "liz@gmail.com"
    }];

    // 배열 목록
    const unitList = users.map(( item ) => {
        return <User key={item.id} user={item} />;
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
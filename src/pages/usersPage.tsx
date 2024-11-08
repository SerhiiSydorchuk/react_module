import React, {useEffect} from 'react';
import {useStore} from "../store";
import {loadUsers} from "../services/api.service";

const UsersPage = () => {
    let {usersSlice:{usersLoad, allUsers}} = useStore();
    useEffect(() => {
         loadUsers().then(value => {
             if(value){
                 usersLoad(value)
             }
         })
    }, []);
    return (
        <div>
            {allUsers.map(user=><div>{user.firstName}</div>)}
        </div>
    );
};

export default UsersPage;
import React, {useEffect} from 'react';
import {useStore} from "../store";
import {loadUsers} from "../services/api.service";
import User from "../components/Users/user";

const UsersPage = () => {
    let {usersSlice:{usersLoad, allUsers,favoriteUser}} = useStore();
    useEffect(() => {
         loadUsers().then(value => {
             if(value){
                 usersLoad(value)

             }
         })
    }, []);
    return (
        <div>
            {allUsers.map(user=> <User user={user} key={user.id}/>)}

            <hr/>
            {favoriteUser && <div>{favoriteUser.firstName} {favoriteUser.email}</div>}
            <hr/>
        </div>
    );
};

export default UsersPage;
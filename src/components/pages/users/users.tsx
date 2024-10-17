import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../servises/api.servise";
import {IUser} from "../../../model/IUser";
import User from "../../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map(user=> <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
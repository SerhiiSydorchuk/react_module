import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../model/IUser";
import User from "../user/User";
import { getUsers} from "../services/api.servise";

type IUsersProps= {
    lift:(id:number)=>void
}

const Users:FC<IUsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))

    }, []);




    return (
        <div>
            {users.map((user:IUser) => <User lift={lift} key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
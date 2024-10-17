import React, {FC} from 'react';
import {IUser} from "../../model/IUser";
type IUserProps ={
    user:IUser
}
const User:FC<IUserProps> = ({user}) => {
    return (
        <div>{user.id} - {user.firstName}  {user.lastName} Age - {user.age}</div>
    );
};

export default User;
import React, {FC} from 'react';
import {IUser} from "../../Model/IUser";
import {useStore} from "../../store";
import styles from './user.module.css'
type UserProps={
    user:IUser
}
const User:FC<UserProps> = ({user}) => {
   let {usersSlice:{setFavorite}} = useStore()
    return (
        <div>
            <div>{user.firstName}
                <button className={styles.btn} onClick={()=>setFavorite(user)}>set as favorite</button>
            </div>
        </div>
    );
};

export default User;
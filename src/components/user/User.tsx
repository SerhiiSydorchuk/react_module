import React, {FC} from 'react';
import {IUser} from "../model/IUser";

type IUserProps = {
    user: IUser;
    lift: (id:number) => void
}

const User: FC<IUserProps> = ({user, lift}) => {
    return (
        <div>
            <div>{user.firstName}</div>
            <button
                onClick={() => {
                    lift(user.id)
                }
                }>click
            </button>
        </div>
    );
};

export default User
import {IUser} from "./IUser";

export interface IUserResp {
    users:IUser[]
    limit:number
    skip:number
    total:number
}
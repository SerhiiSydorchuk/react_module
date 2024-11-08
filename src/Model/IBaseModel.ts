import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type IBaseModel={
    limit:number
    skip:number
    total:number
    users?:IUser[]
    posts?:IPost[]
    comments?:IComment[]
}
import {IPost} from "./IPost";

export interface IPostResponse {
    posts:IPost[]
    limit:number
    skip:number
    total:number
}
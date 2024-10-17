import axios from "axios";
import {IBase} from "../model/IBase";
import {IUser} from "../model/IUser";
import {IPost} from "../model/IPost";
import {IComment} from "../model/IComment";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    headers:{}
});


export const getUsers =async ():Promise<IUser[]> =>{
   let {data : {users}} = await axiosInstance.get<IBase & {users:IUser[]}>('/users')
    return users;
   }


export const getPosts =async ():Promise<IPost[]> =>{
    let {data : {posts}} = await axiosInstance.get<IBase & {posts:IPost[]}>('/posts')
    return posts;
}

export const getComments =async ():Promise<IComment[]> =>{
    let {data : {comments}} = await axiosInstance.get<IBase & {comments:IComment[]}>('/comments')
    return comments;
}
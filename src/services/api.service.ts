import axios from "axios";
import {IBaseModel} from "../Model/IBaseModel";
import {IUser} from "../Model/IUser";
import {IPost} from "../Model/IPost";
import {IComment} from "../Model/IComment";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    headers:{}
});

export let loadUsers = async ():Promise<IUser[]|undefined> => {
    let {data:{users}} = await axiosInstance.get<IBaseModel>('users')
    return users;
}
export let loadPosts = async (): Promise<IPost[]|undefined>=> {
   let {data:{posts}} = await axiosInstance.get<IBaseModel>('posts')
    return posts;
}
export let loadComments =async ():Promise<IComment[]|undefined>=>{
  let{data:{comments}}= await axiosInstance.get('comments')
    return comments
}
import axios from "axios";

import {IPost} from "../models/IPost";
import {PostProps} from "../models/PostModel";

let axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers:{  'Content-type': 'application/json; charset=UTF-8'}
});

export  const  pushPost = async (dataFromPost: PostProps):Promise<IPost> => {
            const {data } = await axiosInstance.post<IPost>('/posts', dataFromPost)
             return data }




    export  const  getAllPosts = async ():Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/posts');
    return data;
}



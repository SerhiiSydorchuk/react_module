import {IUser} from "../model/IUser";




// export const getUsers = async () =>{
//        return await  fetch('https://dummyjson.com/users')
//             .then(value => value.json())
// }
//
// export const getPost = async (user:IUser)=>{
//     return await  fetch('https://dummyjson.com/posts/user/' + user.id)
//         .then(value => value.json())
// }
import axios from "axios";
import {IPost} from "../model/IPost";
import {IPostResponse} from "../model/IPostResponse";
import {IUserResp} from "../model/IUserResp";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    headers:{"Content-Type":"application/json"}
});

export const getUsers= async ():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUserResp>('/users');
    console.log(axiosResponse.data);
    return axiosResponse.data.users
}
export const getPost= async (id:number):Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPostResponse>('/posts/user/' + id);
    console.log(axiosResponse.data);
    console.log(axiosResponse);
    return axiosResponse.data.posts
}
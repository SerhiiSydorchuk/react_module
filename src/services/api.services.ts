import axios from "axios";
import {IComment} from "../model/IComment";
import {IBaseModel} from "../model/IBaseModel";

 export let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    headers:{}
});


 export const apiService = {

     comments: {
         getAll: async (page: number):Promise<{data:IBaseModel & {comments:IComment[]}, flag:boolean}> => {
             const limit = 30;
             const skip = (page - 1) * limit;
          const {data } =
              await axiosInstance.get<IBaseModel & {comments:IComment[]}>('/comments', {params: {skip: skip, limit:limit }});
                 // const lastID = data.comments[data.comments.length - 1 ].id
                 let flag = data.comments.length < limit ;
                 return { data , flag};
         }
     }
 }
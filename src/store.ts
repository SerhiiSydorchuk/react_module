
import {IUser} from "./Model/IUser";
import {IPost} from "./Model/IPost";
import {IComment} from "./Model/IComment";
import {create} from "zustand/react";


type StoreType = {
    usersSlice:{
        allUsers:IUser[]
        usersLoad:(users:IUser[])=>void
        setFavorite:(user:IUser)=>void
        favoriteUser:IUser | null
    },
    postsSlice:{
        allPosts:IPost[]
        postsLoad:(posts:IPost[])=>void
    },
    commentsSlice:{
        allComments:IComment[]
        commentsLoad:(comments:IComment[])=>void
    }
}

export let useStore = create<StoreType>()((set)=>{
return {
usersSlice:{
    allUsers:[],
    usersLoad:(users)=>{
        return set((state)=>{
           return {
               ...state,usersSlice:{
                   ...state.usersSlice,
                   allUsers:users
               }
           }
         })
    },
    favoriteUser:null,
    setFavorite:(user)=>{
        return set((state)=> {
            return {
                ...state, usersSlice: {
                    ...state.usersSlice,
                    favoriteUser:user

                }
            }
        })
    }
},
commentsSlice:{
    allComments:[],
    commentsLoad:((comments)=>{
        return set((state)=>{
            return {
                ...state,commentsSlice:{
                    ...state.commentsSlice,
                    allComments:comments
                }
            }
        })
    })
},
    postsSlice:{
    allPosts:[],
        postsLoad:(posts)=>{
        return set((state)=>{
            return {
                ...state,postsSlice:{
                    ...state.postsSlice,
                    allPosts:posts
                }
            }
        })
        }
    }

}
})
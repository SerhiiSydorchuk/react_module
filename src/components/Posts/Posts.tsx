import React, {FC} from 'react';
import Post from "../Post/Post";
import {IPost} from "../model/IPost";

 type IPostsProps =  {
     posts:IPost[]
}

const Posts:FC<IPostsProps> = ({posts}) => {

    return (
        <div>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
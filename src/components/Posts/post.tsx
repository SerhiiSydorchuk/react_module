import React, {FC} from 'react';
import {IPost} from "../../Model/IPost";
type postProps ={post:IPost}
const Post:FC<postProps> = ({post}) => {
    return (
        <div>

            <h5>Post ID - {post.id} User ID {post.userId} </h5>
            {post.body}
        </div>
    );
};

export default Post;
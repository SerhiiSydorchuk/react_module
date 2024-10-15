import React, {FC} from 'react';
import {IPost} from "../model/IPost";

type IPostProps = {
post:IPost
}

const Post:FC<IPostProps> = ({post}) => {
    return (
        <div>
            {post.id} - {post.title}
        </div>

    );
};

export default Post;
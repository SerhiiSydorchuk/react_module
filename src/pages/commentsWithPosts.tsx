import React from 'react';
import {useStore} from "../store";

const CommentsWithPosts = () => {
    let { commentsSlice:{allComments}}=useStore()
    return (
        <div>
            {allComments.map(comment=><Comment/>)}
        </div>
    );
};

export default CommentsWithPosts;
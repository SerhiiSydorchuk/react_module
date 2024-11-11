import React, {FC} from 'react';
import {IComment} from "../../Model/IComment";
type commentProps={comment:IComment}
const Comment:FC<commentProps> = ({comment}) => {
    return (
        <div>

            <h5>Comment ID - {comment.id} Post ID - {comment.postId}</h5>
            <div>{comment.body}</div>

        </div>
    );
};

export default Comment;
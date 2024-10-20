import React, {FC} from 'react';
import {IComment} from "../model/IComment";
type CommentProps ={
    comment:IComment }
const Comment:FC<CommentProps>   = ({comment}) => {
    return (
        <div>
            {comment.id} - {comment.body}
        </div>
    );
};

export default Comment ;
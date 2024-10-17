import React, {FC} from 'react';
import {IComment} from "../../model/IComment";
type ICommentProps = {
    comment:IComment
}
const Comment:FC<ICommentProps> = ({comment}) => {
    return (
        <div>
            <div>{comment.body}</div>
        </div>
    );
};

export default Comment;
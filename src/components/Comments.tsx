import React, {FC} from 'react';
import {IComment} from "../model/IComment";
import Comment from "./Comment";


type ICommentProps = {
    comments: IComment[]
}
const Comments:FC<ICommentProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(item=> <Comment key={item.id} comment={item}/>)
            }
        </div>
    );
};

export default Comments;
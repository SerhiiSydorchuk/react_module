import React, {FC} from 'react';
import {IPostWithComments} from "../../Model/IPostWithComments";


interface IProps {
    items: IPostWithComments[];
}
const PostWithComment:FC<IProps> = ({items}) => {
    return (
        <div>
            {items.map(item=>
            <div>
                <h4>{item.id} {item.body}</h4>
                <ul>
                    {item.comments.map(comment=><li>{comment.postId} {comment.id} {comment.body}</li>)}
                </ul>
            </div>
            )}
        </div>
    );
};

export default PostWithComment;
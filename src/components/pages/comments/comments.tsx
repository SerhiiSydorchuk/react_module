import React, {useEffect, useState} from 'react';
import {IComment} from "../../../model/IComment";
import {getComments} from "../../../servises/api.servise";
import Comment from "../../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        getComments().then(value => setComments(value))
    }, []);
    return (
        <div>
            {
                // eslint-disable-next-line react/jsx-no-undef
                comments.map(comment=> <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;
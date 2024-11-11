import React, {useEffect} from 'react';
import {useStore} from "../store";
import {loadComments} from "../services/api.service";
import Comment from "../components/Comments/comment";

const CommentsPage = () => {
    let {commentsSlice:{allComments,commentsLoad}}= useStore()
    useEffect(() => {
        loadComments().then(value => {
            if(value){
                commentsLoad(value);
            }
        })
    }, []);
    return (
        <div>

            {allComments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsPage;
import React, {useEffect} from 'react';
import {useStore} from "../store";
import {loadComments} from "../services/api.service";

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
            {allComments.map(comment=><Comment />)}
        </div>
    );
};

export default CommentsPage;
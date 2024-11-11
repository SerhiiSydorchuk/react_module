import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../store";
import {IPostWithComments} from "../Model/IPostWithComments";
import PostWithComment from "../components/postWithComment/PostWithComment";



const PostWithCommentsPage = () => {
    const [postState, setPost] = useState<IPostWithComments[]>([])
       let { postsSlice:{allPosts},commentsSlice:{allComments}}=useStore()

    const PostWithComments = useMemo(() => {
        return allPosts.map(post => {
            return {...post, comments: allComments.filter(comment => post.id === comment.postId)}
        })
    }, [allPosts, allComments]);
    useEffect(() => {
        setPost(PostWithComments)
    }, [PostWithComments]);



    return (
        <div>
           {allPosts.map(post => <PostWithComment items={postState}/>)}
        </div>
    );
};

export default PostWithCommentsPage;
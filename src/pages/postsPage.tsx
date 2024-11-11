import React, {useEffect} from 'react';
import {loadPosts} from "../services/api.service";
import {useStore} from "../store";
import Post from "../components/Posts/post";

const PostsPage = () => {
    let {postsSlice:{allPosts,postsLoad}} = useStore()
    useEffect(() => {
        loadPosts().then(value => {
            if(value) {
                postsLoad(value)
            }
        })
    }, []);
    return (
        <div>

            {allPosts.map(post=><Post post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsPage;
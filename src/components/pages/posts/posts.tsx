import React, {useEffect, useState} from 'react';
import {getPosts} from "../../../servises/api.servise";
import {IPost} from "../../../model/IPost";
import Post from "../../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map(post=> <Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;
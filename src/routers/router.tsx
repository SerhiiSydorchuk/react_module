import {createBrowserRouter} from "react-router-dom";

import PostsPage from "../pages/postsPage";
import CommentsPage from "../pages/commentsPage";
import UsersPage from "../pages/usersPage";
import MainLayout from "../Layouts/MainLayout";
import PostWithCommentsPage from "../pages/PostWithCommentsPage";

export let router =createBrowserRouter([
    {path:'/', element:<MainLayout/> ,children:[
            {path:'posts',element:<PostsPage/>},
            {path:'users',element:<UsersPage/>},
            {path:'comments',element:<CommentsPage/>},
            {path:'show',element:<PostWithCommentsPage/>}

        ]}
])
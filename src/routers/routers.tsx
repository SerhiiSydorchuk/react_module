import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Users from "../components/pages/users/users";
import Comments from "../components/pages/comments/comments";
import Posts from "../components/pages/posts/posts";

export const routers = createBrowserRouter([
    { path:'/',element:<MainLayout/>,
    children:[
        {path:'users',element:<Users/>},
        {path:'posts',element:<Posts/>},
        {path:'comments',element:<Comments/>}
    ]}
])
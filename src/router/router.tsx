import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CommentsPage from "../pages/CommentsPage";



export let router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children: [
            {index:true , element:<HomePage/>},
            {path:'comments', element:<CommentsPage/>}
        ]

    }
])



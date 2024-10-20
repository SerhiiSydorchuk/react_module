import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";
import Pagination from "../components/Pagination";

const MainLayout = () => {
    return (
        <div>

            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
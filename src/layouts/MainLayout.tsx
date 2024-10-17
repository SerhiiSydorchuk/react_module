import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/menu";

 const MainLayout = () => {
    return (
        <div>
             <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
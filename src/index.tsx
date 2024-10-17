import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {routers} from "./routers/routers";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
    <RouterProvider router={routers}/>
);




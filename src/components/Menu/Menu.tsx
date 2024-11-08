import React from 'react';
import {Link} from "react-router-dom";
import styles

const Menu = () => {
    return (
        <ul className={styles.menu}>
           <li><Link to={''}>Home Page</Link></li>
           <li><Link to={'users'}>Users Page</Link></li>
           <li><Link to={'comments'}>Comments Page</Link></li>
           <li><Link to={'posts'}>Posts Page</Link></li>
           <li><Link to={'show'}>Show Posts with Comments</Link></li>
            <hr/>
        </ul>
    );
};

export default Menu;
import React from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li ><Link to={''} className={styles.link}>Home Page</Link></li>
                <li><Link to={'users'} className={styles.link}>Users Page</Link></li>
                <li><Link to={'comments'} className={styles.link}>Comments Page</Link></li>
                <li><Link to={'posts'} className={styles.link}>Posts Page</Link></li>
                <li><Link to={'show'} className={styles.link}>Show Posts with Comments</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
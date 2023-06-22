import React from "react";
import { Link } from 'react-router-dom'

const SideMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="/main"> Main </Link>
                </li>
                <li>
                    <span>User Management </span>
                    <ul>
                        <li>
                            <Link to="/user-mangement/users">Users</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default SideMenu;
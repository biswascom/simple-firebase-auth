// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Header;
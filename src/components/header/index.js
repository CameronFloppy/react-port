import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                {/* <Link to='/'>
                    <h1>Jay Ford's Portfolio</h1>
                </Link> */}

                <nav className="nav-list">
                    <Link to="/about" className="nav-item">About Me</Link>
                    <Link to="/works" className="nav-item">My Works</Link>
                    <Link to="/links" className="nav-item">Contact/Links</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
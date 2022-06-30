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
                    <div className="nav-div">
                        <Link to="/about" className="nav-item">About Me</Link>
                    </div>
                    <div className="nav-div">
                    <Link to="/works" className="nav-item">My Work</Link>
                    </div>
                    <div className="nav-div">
                    <Link to="/links" className="nav-item">Links</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
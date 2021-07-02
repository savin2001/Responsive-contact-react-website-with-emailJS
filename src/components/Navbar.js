import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <div className="section">
            <nav className="navbar">
                <Link to="/" className="nav-logo active">
                    Home
                </Link>
                <div onClick={handleClick} className="nav-icon">
                    {open ? <FiX /> : <FiMenu />}
                </div>
                <ul className={open ? "nav-links active" : "nav-links"}>
                    <li className="nav-item">
                        <Link
                            to="/story"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Story
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/vision"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Vision
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/news"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a href="#" className="nav-link">
                            fb
                        </a>
                        <a href="#" className="nav-link">
                            tw
                        </a>
                        <a href="#" className="nav-link">
                            yt
                        </a> */}
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/donate"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            <button className="donate pulse">Donate</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

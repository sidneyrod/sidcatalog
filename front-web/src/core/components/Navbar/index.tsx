import React from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from "core/utils/auth";
import { useEffect } from "react";
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav">
            <div className="col-3">
                <Link to="/" className="nav-logo-text">
                    <h4>SID Catalog</h4>
                </Link>
            </div>
            <div className="col-6">
                <ul className="main-menu">
                    <li>
                        <NavLink to="/" activeClassName="active" exact className="nav-link">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active" className="nav-link">
                            CATÁLOGO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" activeClassName="active" className="nav-link">
                            ADMIN
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-3 text-right">
                {currentUser && (
                    <>
                        {currentUser}
                        <Link
                            to=""
                            className="nav-link active d-inline" 
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </Link>
                    </>
                )}
                {!currentUser && (
                    <Link to="/auth/login" className="nav-link active" >
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default Navbar;
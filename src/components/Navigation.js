import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ()=>{
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid"> 
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <Link to="/user" className="nav-link ">
                        <span className="navbar-brand">Incora</span>
                    </Link>
                    <div>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/user" className="nav-link ">User</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link ">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/post" className="nav-link ">Post</Link>
                            </li>
                        </ul> */}
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
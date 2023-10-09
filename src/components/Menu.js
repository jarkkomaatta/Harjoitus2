import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css';

export default function Menu() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div class="container-fluid">
                <a class="navbar-brand">WELCOME</a>   
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link className='nav-link' to="/">Random meal</Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link' to="/about">Random fox</Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link' to="/contactus">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

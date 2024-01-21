import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/"><img width="120" className="img-fluid" src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto text-center">
                        <a className="nav-link mx-2 text-danger fw-bold" href="/">Home</a>
                        <a className="nav-link mx-2 text-black fw-bold" href="/">About Us</a>
                        <a className="nav-link mx-2 text-black fw-bold" href="/">Products</a>
                        <a className="nav-link mx-2 text-black fw-bold" href="/">Blog</a>
                        <a className="nav-link mx-2 text-black fw-bold" href="/">Tract Order</a>
                        <a className="nav-link mx-2 text-black fw-bold">Contact Us</a>
                        
                    </div>

                </div>
            </div>
</nav>
    );
};

export default Navbar;
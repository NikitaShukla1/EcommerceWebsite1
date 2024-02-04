import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartArrowDown, faEnvelope, faMagnifyingGlass, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { mainlogo } from "../assets/index";
import { useRef } from "react";

const Header = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return (
        <>
            <div className='main-div-navbar'>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <div className='w-100 d-flex justify-content-between'>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className='text-dark contact-info me-2' />
                                <a href="#" className="navbar-sm-brand text-dark text-decoration-none contact-info me-2">info@company.com</a>
                                <FontAwesomeIcon icon={faPhone} className='text-dark contact-info me-2' />
                                <a href='' className="navbar-sm-brand text-dark text-decoration-none contact-info me-2">010-020-0300</a>
                            </div>
                            <div>
                                <a href='' className='text-dark'>  <FontAwesomeIcon icon={faFacebook} className='contact-info me-2' /></a>
                                <a href='' className='text-dark'>  <FontAwesomeIcon icon={faSquareInstagram} className='contact-info me-2' /></a>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* first nav end */}

                {/* main nav start */}
                <nav class="navbar navbar-expand-lg navbar-light navbar-2" ref={navRef}>
                    <button class="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={showNavbar}>
                    <FontAwesomeIcon icon={faBars} className='navbar-hamburger'/>
                    </button>
                    <div class="container d-flex justify-content-between">
                        <div>
                            {/* <h1 className='text-success'>its code</h1> */}
                            <div className='logo'>
                                <img src={mainlogo} className='img-logo' />
                                {/* <h5 >
                                    All Types of Precious & Semi Precious Stones
                                </h5> */}
                            </div>
                        </div>
                        <nav class="navbar navbar-expand-lg navbar-light">
                            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                            <ul class="navbar-nav mr-auto">                            
                                <li class="nav-item nav-items  active">
                                    <Link to="/home" className="nav-link nav-links text-light">Home</Link>
                                </li>
                                <li class="nav-item nav-items ">
                                    <Link to="/AboutUs" className="nav-link nav-links text-light">About Us</Link>
                                </li>
                                <li class="nav-item nav-items ">
                                    <Link to="/Shop" className="nav-link nav-links text-light">Shop</Link>
                                </li>
                                <li class="nav-item nav-items">
                                    <Link to="/contact" className="nav-link nav-links text-light">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="position-relative">
                                <a href="#" className="text-decoration-none text-white"><FontAwesomeIcon icon={faMagnifyingGlass} className='nav-icon' /></a>
                                <a href="#" className="text-decoration-none text-white"><FontAwesomeIcon icon={faCartArrowDown} className='nav-icon' /></a>
                                <a href="#" className="text-decoration-none text-white"><FontAwesomeIcon icon={faUser} className='nav-icon' /></a>
                            </div>
                            <div className='position-absolute rounded-circle cart'><span>7</span></div>
                            {/* </div> */}
                            {/* </div> */}
                        </nav>
                    </div>
                </nav>
            </div>
            {/* main nav end */}


            {/* <div className='cart'>
                    <a>
                        <span><AiOutlineHeart /></span>
                        <span>Wishlist</span>
                    </a>
                    <a>
                        <span> <FaCartArrowDown /></span>
                        <span>Bag</span>
                    </a>
                </div> */}



        </>
    )
}
export default Header
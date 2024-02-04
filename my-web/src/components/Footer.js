import React from 'react'
import { HiMailOpen } from "react-icons/hi"
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import "./Footer.css";
import { mainlogo } from "../assets/index";
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <>
            <div className='end-footer'>
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <div className='logo'>
                            <img src={mainlogo} className='img-logo' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h2>Contact Us</h2>
                        <p>
                            <HiMailOpen /> &nbsp;&nbsp; &nbsp;
                            <span>gemssadhana@gmail.com</span>
                        </p>
                        <p>
                            <BsFillTelephoneFill />&nbsp;&nbsp; &nbsp;&nbsp;
                            <span>7498101104</span>
                        </p>
                        <p>
                            <BsFillTelephoneFill />&nbsp;&nbsp; &nbsp;&nbsp;
                            <span>7738718550</span>
                        </p>
                        <p>
                            <GoLocation />&nbsp;&nbsp; &nbsp;&nbsp;
                            <span>Borivali West Mumbai, Vasai East.</span>
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <span><BsList /></span>&nbsp;&nbsp;
                                <Link to="/home" className="nav-links">Home</Link>
                                {/* <a href="#">Home</a> */}
                            </li>
                            <li>
                                <span><BsList /></span>&nbsp;&nbsp;
                                <Link to="/AboutUs" className="nav-links">About Us</Link>
                                {/* <a href="#">About Us</a> */}
                            </li>
                            <li>
                                <span><BsList /></span>&nbsp;&nbsp;
                                <Link to="/Shop" className="nav-links">Shop</Link>
                                {/* <a href="#">Product & Services</a> */}
                            </li>
                            <li>
                                <span><BsList /></span>&nbsp;&nbsp;
                                <Link to="/contact" className="nav-links">Contact Us</Link>
                                {/* <a href="#">Testimonial</a> */}
                            </li>
                            {/* <li>
                                <span><BsList /></span>&nbsp;&nbsp;
                                <Link to="/home" className="nav-links">Home</Link>
                                <a href="#">Contact Us</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className='col-md-3'>
                    <h2>Follow Us</h2>
                        <div className="social-media-icon">
                            <FaFacebookSquare />&nbsp;
                            < FaInstagramSquare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <a href="#"><div className="bottom-footer_btn">vbdigitalcard.com || Create Your Card Now || 2023</div></a>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import { Link } from "react-router-dom";
import "./NewArrivals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { firstslideimg, secondslideimg, thirdslideimg, fourthslideimg, fifthslideimg } from "../assets/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const NewArrivals = () => {
    const [intervalz, setIntervalz] = useState(3000); //initial state here represents the interval for first image.

    const onChange = (index, item) => {
        setIntervalz(item.props["data-interval"]);
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
            <div className="title">
                <h2 className="text-center fs-1 lh-lg">New Arrival</h2>
                <p className="text-center fs-4 lh-lg">some description about new arrival</p>
            </div>
            <div className='new-arrivals-sec'>
                <div className='new-arrival-cat'>
                    <div className="tabs">
                        <ul className="nav justify-content-center ms-5">
                            <li className="trend-item active me-2">
                                <Link to="/home" className="nav-link trend-links">Earings</Link>
                            </li>
                            <li className="trend-item me-2">
                                <Link to="/home" className="nav-link trend-links">Bracelet</Link>
                            </li>
                            <li className="trend-item me-2">
                                <Link to="/home" className="nav-link trend-links">Ring</Link>
                            </li>
                            <li className="trend-item me-2">
                                <Link to="/home" className="nav-link trend-links">Necklace</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="new-arrivals">
                    <Carousel responsive={responsive} onChange={onChange}
                        autoPlay
                        interval={intervalz}
                        infiniteLoop={true}>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={firstslideimg} className="img-responsive img-fluid new-categories-img card-img-top" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4 className='card-title'>Apple iPad</h4>
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={secondslideimg} className="img-responsive img-fluid  new-categories-img card-img-top" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4>Sony Headphone</h4>
                                                {/* <p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p> */}

                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={thirdslideimg} className="img-responsive img-fluid  new-categories-img" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4>Macbook Air</h4>
                                                {/* <p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p> */}

                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={fourthslideimg} className="img-responsive img-fluid new-categories-img" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4>Nikon DSLR</h4>
                                                {/* <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p> */}

                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={thirdslideimg} className="img-responsive img-fluid  new-categories-img" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4>Macbook Air</h4>
                                                {/* <p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p> */}

                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-shadow border-0 mb-4">
                            <div class="card-body">
                                <div className="card new-arrival-card">
                                    <div class="d-block d-md-flex align-items-center">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={firstslideimg} className="img-responsive img-fluid new-categories-img card-img-top" alt="" />
                                            </div>
                                            <div className="thumb-content card-body">
                                                <h4 className='card-title'>Apple iPad</h4>
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div >
    )
}

export default NewArrivals
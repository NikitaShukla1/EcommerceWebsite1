import React from 'react'
import "./Testimonial.css";
import { firstslideimg, secondslideimg, thirdslideimg, fourthslideimg, fifthslideimg } from "../assets/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const Testimonial = () => {
    const [intervalz, setIntervalz] = useState(2000); //initial state here represents the interval for first image.

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
        <>
            <div class="testimonial3 mb-3">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="mb-3">Check what our Customers are Saying</h2>
                        <h4 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt</h4>
                    </div>
                </div>
                <Carousel responsive={responsive} style={{ marginLeft: "7rem" }} onChange={onChange}
                    autoPlay
                    interval={intervalz}
                    infiniteLoop={true}>
                    <div class="card card-shadow border-0 mb-4">
                        <div class="card-body">
                            <h4 class="font-weight-light" style={{ fontSize: "calc(1.275rem + .3vw)" }}>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h4>
                            <div class="d-block d-md-flex align-items-center">
                                <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" class="rounded-circle" /></span>
                                <div style={{ marginLeft: "6%" }}>
                                    <h6 class="mb-0 customer">Michelle Anderson</h6>
                                    <div class="font-10">
                                        <a href="" class="text-success"> <FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-muted"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-shadow border-0 mb-4">
                        <div class="card-body">
                            <h4 class="font-weight-light" style={{ fontSize: "calc(1.275rem + .3vw)" }}>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h4>
                            <div class="d-block d-md-flex align-items-center">
                                <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg" alt="wrapkit" class="rounded-circle" /></span>
                                <div style={{ marginLeft: "6%" }}>
                                    <h6 class="mb-0 customer">Mark mesty</h6>
                                    <div class="font-10">
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-muted"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card card-shadow border-0 mb-4">
                        <div class="card-body">
                            <h4 class="font-weight-light" style={{ fontSize: "calc(1.275rem + .3vw)" }}>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h4>
                            <div class="d-block d-md-flex align-items-center">
                                <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg" alt="wrapkit" class="rounded-circle" /></span>
                                <div style={{ marginLeft: "6%" }}>
                                    <h6 class="mb-0 customer">Limpsy adam</h6>
                                    <div class="font-10">
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-muted"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-shadow border-0 mb-4">
                        <div class="card-body">
                            <h4 class="font-weight-light" style={{ fontSize: "calc(1.275rem + .3vw)" }}>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h4>
                            <div class="d-block d-md-flex align-items-center">
                                <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg" alt="wrapkit" class="rounded-circle" /></span>
                                <div style={{ marginLeft: "6%" }}>
                                    <h6 class="mb-0 customer">Mark mesty</h6>
                                    <div class="font-10">
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-success"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                        <a href="" class="text-muted"><FontAwesomeIcon icon={faStar} className='previous' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>;
            </div>
        </>
    )
}

export default Testimonial
import React from 'react';
import "./Home.css";
import TopCategories from './TopCategories';
// import Footer from "../components/Footer";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NewArrivals from "./NewArrivals";
import Testimonial from "./Testimonial";
// import Shop from "./Shop";
import { firstslideimg, secondslideimg, thirdslideimg, fourthslideimg, fifthslideimg } from "../assets/index";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Carousel style={{top:"-4rem"}}>
        <Carousel.Item>
          <Carousel>
            <img src={firstslideimg} className="slide-img" />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel>
            <img src={secondslideimg} className="slide-img" />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel>
            <img src={thirdslideimg} className="slide-img" />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel>
            <img src={fourthslideimg} className="slide-img" />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel>
            <img src={fifthslideimg} className="slide-img" />
            <Carousel.Caption>
              <h1>Fourth slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel>
        </Carousel.Item>
      </Carousel>

      {/* <AboutUs /> */}
      <TopCategories />
      <NewArrivals/>
      <Testimonial/>
      <ContactUs />
    </>
  )
}

export default Home
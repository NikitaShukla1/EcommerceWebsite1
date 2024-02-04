import React, { Component } from 'react'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { firstslideimg, secondslideimg, thirdslideimg, fourthslideimg, fifthslideimg } from "../assets/index";
//import Carousel from 'react-bootstrap/Carousel';
import "./TopCategories.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillEye } from "react-icons/ai";

const TopCategories = () => {
  return (
    <>
      <Card className='categories-card '>
        <h1>Top Categories</h1>
        <Card.Body className="d-flex flex-wrap text-center">
          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={firstslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={secondslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={thirdslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fourthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fifthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={thirdslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={secondslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={firstslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fourthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>

          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fifthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>
          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fifthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              
            </div>
          </div>
          <div className="card">
            <a href="#" tabindex="0" className="cat-img"><img src={fourthslideimg} className="cat-img-a" /></a>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default TopCategories
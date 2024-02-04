import React from 'react'
import "./ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export const ContactUs = () => {
  return (
    <>
      <div className="container contact-container">
        <div className='section-1'>
          <div className="contactus-form">
            <h1 className="mb-4">Contact Us</h1>
            <input type="" name="c_name" placeholder="Enter Your Name" required="" />
            <input type="" name="c_contact" maxlength="13" placeholder="Enter Your Mobile No" required="" />
            <input type="email" name="c_email" placeholder="Enter Your Email Address" />
            <textarea name="c_msg" placeholder="Enter your Message or Query" required=""></textarea>
            <input type="submit" className="btn-submit" value="Send!" name="email_to_client" />
          </div>
        </div>
        <div className='section-2'>
        <div className="row">
          <div className="card col-md-3">
            <div className="card-body" >
            <FontAwesomeIcon icon={faLocationDot} className='contact-icons align-items-center' />
              <h3 className="card-title text-center">Our Main office</h3>
              <p className="card-text text-center fs-4">Vasai East</p>
            </div>
          </div>
          <div className="card col-md-3">
            <div className="card-body" >
            <FontAwesomeIcon icon={faPhone} className='contact-icons' />
              <h3 className="card-title text-center">Contact Number</h3>
              <p className="card-text text-center fs-4">7738718550</p>
            </div>
          </div>
          <div className="card col-md-3" >
            <div className="card-body" >
            <FontAwesomeIcon icon={faEnvelope} className='contact-icons' />
              <h3 className="card-title text-center">Email</h3>
              <p className="card-text text-center fs-5">gemssadhana@gmail.com</p>
            </div>
          </div>
          <div className="card col-md-3" >
            <div className="card-body" >
            <FontAwesomeIcon icon={faFax} className='contact-icons'/>
              <h3 className="card-title text-center">FAX</h3>
              <p className="card-text text-center fs-4">1-234-567-8900</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
import React from 'react'
import "./AboutUs.css";
import {aboutimg} from "../assets/index";

const AboutUs = () => {
    return (
        <>
        <div className="divmaincontainer">
            <div className="container-0">
                <div className="container-1">
                    <div class="container-2">
                        <div class="container-3">
                            {/* <div class="u-image u-image-circle u-image-1" alt="" data-image-width="1500" data-image-height="1000"></div> */}
                            <img src={aboutimg} className="conatiner-3-img"></img>
                            <h5 class="container-3-text"> We dwelling elegance do shutters appetite yourself diverted.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-text"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
            </div>
        </>
    )
}

export default AboutUs;
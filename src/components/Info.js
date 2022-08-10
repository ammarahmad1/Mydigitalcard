import React from "react";
import pic from "./images/pic.jpeg";
import './Info.css';
import emaillogo from "./images/email-logo.png"
import linkedinlogo from "./images/linkedin-logo.png"

function Info() {
    return(
        <div>
            <img className="mypic" src={pic} alt="picture" width={237} height = {217}  />
            <div className="names-etc">
                <h2>Ammar Ahmad</h2>
                <h3>Front-end Developer</h3>
                <a href="http://ammarahmaddev.infinityfreeapp.com/">Website</a>
                <div className="buttons">
                    <button className="button1" onClick={'#'}>
                        EMAIL
                    </button>
                    <button className="button2" onClick={'#'}>
                        Linkedin
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Info;
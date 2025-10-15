import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact=()=>{
    return(
    <>
        <div className='container contact' id="contact">
           <h1>CONTACT ME</h1>
           <div className='contact-icon'
           data-aos="zoom-in-up"
        data-aos-duration="1000"
           >
                <a href="https://www.linkedin.com/in/debjyoti-das-890a69184/" target="_blank" className='items'><FaLinkedin className='icons'/></a>
                <a href="mailto:dasdevjyoti15@gmail.com" target="_blank" className='items'><CgMail className='icons'/></a>
                <a href="https://github.com/debjyotidas/" target="_blank" className='items'><FaGithub className='icons'/></a>
                <a href="https://twitter.com/dasdevjyoti15" target="_blank" className='items'><FaXTwitter className='icons'/></a>
                <a href="https://www.instagram.com/davelivingfree7/" target="_blank" className='items'><FaInstagram className='icons'/></a>
                {/* <a href="#" target="_blank" className='items'><FaFacebook className='icons'/></a> */}

           </div>
        </div>
    </>
    )
    
}
export default Contact
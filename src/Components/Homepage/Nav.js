import "./Nav.scss";
import bg from "../Images/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaCross, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapPin, FaPhone, FaPinterest, FaTwitter, FaXmark, FaYoutube } from "react-icons/fa6";
import { useState } from "react";
function Nav() {
    const [slide, setSlide] = useState(false);
    return <nav>
        <div className="navbar">
            <div className="navpart1">
                <img src={bg} alt="404 Not found" />
            </div>
            <div className="navpart2">
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About Us</Link>
                <Link to={"/"}>Services</Link>
                <Link to={"/"}>Gallery</Link>
                <Link to={"/"}>Contact</Link>
            </div>
            <div className="navpart3" onClick={() => setSlide(true)}>
                <FaBars className="i" />
            </div>
        </div>
        {slide && <div className="slide" data-aos="fade-left">
            <div className="one1">
                <div><FaXmark onClick={() => setSlide(false)} /></div>
                <h2>Get In Touch</h2>
                <p><FaMapPin className="f-icon" /> No.33/20,Ramakrishnapuram 3rd  Street,West Mambalam,Chennai,Tamil Nadu,600033</p>
                <p><FaPhone className="f-icon" />+91 75500 00206</p>
                <p><FaEnvelope className="f-icon" />  sales@smartroofings.in</p>
                <div className="icon">
                    <span className="i1"><FaFacebookF className="social" /></span>
                    <span className="i2"><FaInstagram className="social" /></span>
                    <span className="i3"><FaYoutube className="social" /></span>
                    <span className="i4"><FaLinkedinIn className="social" /></span>
                    <span className="i4"><FaTwitter className="social" /></span>
                    <span className="i4"><FaPinterest className="social" /></span>
                </div>
            </div></div>}
    </nav>
}
export default Nav;
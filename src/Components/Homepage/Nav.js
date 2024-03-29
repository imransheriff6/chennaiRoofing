import "./Nav.scss";
import bg from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapPin, FaPhone, FaPinterest, FaTwitter, FaXmark, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Aos from "aos";
function Nav() {
    useEffect(() => {
        Aos.init();
    }, [])
    const [slide, setSlide] = useState(false)
    return <nav>
        <div className="navbar" data-aos="fade-in">
            <div className="navpart1">
                <img src={bg} alt="404 Not found" />
            </div>
            <div className="navpart2">
                <Link to={"/"} ><span className="underline-closing">Home</span></Link>
                <Link to={"/"} className="underline-closing">About Us</Link>
                <Link to={"/"} className="underline-closing">Services</Link>
                <Link to={"/"} className="underline-closing">Gallery</Link>
                <Link to={"/"} className="underline-closing">Contact</Link>
            </div>
            <div className="contact-info">
                <div className="contact">
                    <Link ><FaPhone className="f-icon" />+91 75500 00206</Link>
                    <a href="to-mail:sales@smartroofings.in" className="email-link"><FaEnvelope className="f-icon" />  sales@smartroofings.in</a>
                </div>
                <div className="icon-div">
                    <Link className="i1"><FaFacebookF className="social" /></Link>
                    <Link className="i2"><FaInstagram className="social" /></Link>
                    <Link className="i3"><FaYoutube className="social" /></Link>
                    <Link className="i4"><FaLinkedinIn className="social" /></Link>
                    <Link className="i4"><FaTwitter className="social" /></Link>
                    <Link className="i4"><FaPinterest className="social" /></Link>
                </div>
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
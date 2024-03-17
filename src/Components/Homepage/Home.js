import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaCalendarDays,
  FaGear,
  FaMapPin,
  FaUserCheck,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaAngleRight,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import bg from "../Images/logo.png";
import bg1 from "../Images/Content 1.jpg";
import bg2 from "../Images/Content 2.jpg";
import bg3 from "../Images/Content 3.jpg";
import bg4 from "../Images/service-1.jpg";
import bg5 from "../Images/service-2.jpg";
import bg6 from "../Images/service-3.jpg";
import bg7 from "../Images/service-4.jpg";
import bg8 from "../Images/service-5.jpg";
import bg9 from "../Images/service-6.jpg";
import bg10 from "../Images/Banner 1.jpg";
import bg11 from "../Images/Banner 2.jpg";
import bg12 from "../Images/logo.png";
import g1 from "../Images/g1.jpg";
import g2 from "../Images/g2.jpg";
import g3 from "../Images/g3.jpg";
import g4 from "../Images/g4.jpg";
import g5 from "../Images/g5.jpg";
import g6 from "../Images/g6.jpg";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import icon5 from "../Images/icon5.png";
import icon6 from "../Images/icon6.png";
import bg_icon1 from "../Images/Innovation.png";
import bg_icon2 from "../Images/client.png";
import bg_icon3 from "../Images/on-time.png";
import bg_icon4 from "../Images/improvement.png";
import "./Home.scss";
import Nav from "./Nav";
import Block from "./block";
import Service from "./service";
import Why_us from "./whyus";
import map from "../Images/tamilnadu map.png"
import { Carousel } from "react-bootstrap";
import DarkVariantExample from "./carousel";

function Home() {
  const [pop, setPop] = useState(false);
  useEffect(() => {
    Aos.init();
    window.addEventListener("scroll", function () {
      setPop(this.window.pageYOffset > 0)
    })
  }, []);

  const data = [
    {
      icon: <FaCalendarDays className="i" />,
      title: "Our Aim",
      content:
        "Our Aim is to establish long lasting relationships with our customers by exceeding expectations and gaining their trust through exceptional performance.",
      anime: "fade-up",
      delay: 200,
    },
    {
      icon: <FaGear className="i" />,
      title: "Quality",
      content:
        "Our goal is to make sure that our client gets the best service. We insist on giving our best effort in everything we undertake.",
      anime: "fade-up",
      delay: 400,
    },
    {
      icon: <FaUserCheck className="i" />,
      title: "Commitment",
      content:
        "We make commitments after deep discussions and thoughts with care and then live up to them. We believe in only making promises that we can keep up.",
      anime: "fade-up",
      delay: 600,
    },
  ];
  const serviceData = [
    {
      title: "Pre Engineered Building",
      content:
        "Modern technology makes the pre-engineered metal building possible. We are instrumental in manufacturing pre-engineered metal Building Structure.",
      image: bg4,
      icon: icon1,
    },
    {
      title: "Factory Shed",
      content:
        "As one of the reputed names in the industry, we are engaged in manufacturing and trading Factory Sheds.Weather conditions adverse to factory sheds are very well tolerated by these structures.",
      image: bg5,
      icon: icon2,
    },
    {
      title: "Mezzanine Floor",
      content:
        "IA mezzanine floor is an intermediate floor which is built between two main floors or the floor and ceiling of a building.",
      image: bg6,
      icon: icon3,
    },
    {
      title: "Industrial Sheds",
      content:
        "We are professional Industrial Roofing Contractors in Chennai. The Industrial shed is another option for factory sheds or manufacturing units",
      image: bg7,
      icon: icon4,
    },
    {
      title: "Warehouse Sheds",
      content:
        "We are leading Warehouse Roofing Contractors in Chennai. We offer our services in a flexible manner depending on our clients' needs",
      image: bg8,
      icon: icon5,
    },
    {
      title: "Metal Building",
      content:
        "Engineered out of metal, metal buildings offer a cost-effective and efficient way to construct low-rise buildings.",
      image: bg9,
      icon: icon6,
    },
  ];

  const Why_us_data = [
    {
      icon: bg_icon1,
      title: "High-tech innovation",
      content: "We use advanced technology, integrating automation processes to ensures precision and enhances project outcomes with the automation process."
    },
    {
      icon: bg_icon2,
      title: "Excellent Client Service",
      content: "Ensuring client happiness is our priority. We value clear communication, active teamwork and surpassing your expectations throughout the project."
    },
    {
      icon: bg_icon3,
      title: "On-time delivery",
      content: "As a result of our innovative project management systems, we can effectively shorten the project's duration while maintaining the safety protocols."
    },
    {
      icon: bg_icon4,
      title: "Continuous Improvement",
      content: "Chennairoofings is passionate about continuous improvement and development in the sector, including the laws and practical solutions for projects."
    }
  ]
  return (
    <div>
      <div className="Home">
        {pop ? <div className="navbar-scroll" data-aos="fade-down">
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
        </div> : <Nav />}
        <div className="zoom">
          <img src={bg11} alt="404" />
          <img src={bg10} alt="404" />
          <img src={bg11} alt="404" />
        </div>
        <div className="overlay"></div>
        <div className="main_content">
          <div className="content">
            <h2 data-aos="fade-down">
              With extensive Workmanship and experience in the industry for 30
              Years.
            </h2>
            <h1 data-aos="fade-right" data-aos-delay="100">
              Best Inventive
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="200">
              Industrial Roofing
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="300">
              Contractor in Chennai.
            </h1>
            <p>
              We are the No.1 Industrial roofing service provider in Chennai.
              Reach out and start your industry construction.
            </p>
            <div id="container">
              <button class="learn-more" data-aos="zoom-in">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Read More</span>
              </button>
              <button class="learn-more" data-aos="zoom-in">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Call Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blockwrap">
        {data.map((e) => (
          <Block
            anime={e.anime}
            delay={e.delay}
            icon={e.icon}
            title={e.title}
            content={e.content}
          />
        ))}
      </div>

      {/* About */}

      <div className="about">
        <div className="section1">
          <div className="part1" data-aos={'fade-left'} data-aos-delay={200}>
            <img src={bg1} alt="404" />
          </div>
          <div className="part2">
            <h1 className="h1">About</h1>
            <h1>Smart Roofs and Fabs</h1>
            <p>
              Industrial Roofing Contractors in Chennai with advanced roofing
              solutions for Industrial roofing sector are provided by
              Chennairoofings to shield your operations from the elements. You can
              choose from a variety of materials like durable metal sheets,
              innovative composite panels and energy-efficient green roofs for
              your industrial roofing. Chennairoofings offers comprehensive
              services from installation and maintenance to emergency repairs and
              roof replacements. As a leading contractor we provide Pre-engineered
              Building(PEB), Factory sheds, Metal building, Industrial sheds,
              Warehouse shed, EOT shed and Mezzanine floor.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="part3">
            <h1>Value for Money</h1>
            <p>
              As Chennai's finest industrial roofing contractors and also
              excellent commercial roofers in Chennai, offering comprehensive
              solutions for businesses of all sizes. Choosing the right industrial
              roofing contractor is an investment in the longevity and
              productivity for your project management. We offer exceptional value
              with competitive pricing and comprehensive warranties. We also
              provide Marriage hall construction, Rice mill construction, Poultry
              &EC farm construction with transparent quotes and comprehensive
              warranties. Contact us today and experience the difference a
              reliable, expert roof makes.
            </p>
          </div>
          <div className="part4" data-aos={'fade-right'} data-aos-delay={200}>
            <img src={bg2} alt="404" />
          </div>
        </div>
        <div className="section1">
          <div className="part1" data-aos={'fade-left'} data-aos-delay={200}>
            <img src={bg3} alt="404" />
          </div>
          <div className="part2">
            <h1>Value for Money</h1>
            <p>
              As Chennai's finest industrial roofing contractors and also
              excellent commercial roofers in Chennai, offering comprehensive
              solutions for businesses of all sizes. Choosing the right industrial
              roofing contractor is an investment in the longevity and
              productivity for your project management. We offer exceptional value
              with competitive pricing and comprehensive warranties. We also
              provide Marriage hall construction, Rice mill construction, Poultry
              &EC farm construction with transparent quotes and comprehensive
              warranties. Contact us today and experience the difference a
              reliable, expert roof makes.
            </p>
          </div>
        </div>
      </div>
      <div className="service">
        <h1>Our Company Services</h1>
        <div className="wrap">
          {serviceData.map((e) => (
            <Service
              title={e.title}
              icon={e.icon}
              content={e.content}
              image={e.image}
            />
          ))}
        </div>
      </div>
      <div className="gallery">
        <h1>Our Special Projects</h1>
        <div className="gallerywrap">
          <div className="img">
            <img src={g1} alt="404" />
          </div>
          <div className="img">
            <img src={g2} alt="404" />
          </div>
          <div className="img">
            <img src={g3} alt="404" />
          </div>
          <div className="img">
            <img src={g4} alt="404" />
          </div>
          <div className="img">
            <img src={g5} alt="404" />
          </div>
          <div className="img">
            <img src={g6} alt="404" />
          </div>
        </div>
      </div>
      <div className="Why_us">
        <div className="edge-top"></div>
        <h1>Why Choose Us</h1>
        <div className="choose_wrap">{
          Why_us_data.map(e => <Why_us
            title={e.title}
            icon={e.icon}
            content={e.content} />)
        }</div>
      </div>
      <div className="location">
        <div className="part1">
          <img src={map} alt="404" />
        </div>
        <div className="part2">
          <div>
            <h1>
              Our Branches
            </h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta)
              desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
              quedando esencialmente igual al original.
              Fue popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
              como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="four">
          <img src={bg12} alt="404" />
          <p>
            We are the leading Industrial roofing contractor in Chennai.
            Chennairoofings is also offering PEB and Industrial construction
            solutions. We outline the projects according to the determination of
            the customers all over the greater Chennai area
          </p>
        </div>
        <div className="two">
          <h2>Quick Links</h2>
          <p>
            <FaAngleRight className="t-r" />
            Home
          </p>
          <p>
            <FaAngleRight className="t-r" />
            About Us
          </p>
          <p>
            <FaAngleRight className="t-r" />
            Services
          </p>
          <p>
            <FaAngleRight className="t-r" />
            Gallery
          </p>
          <p>
            <FaAngleRight className="t-r" />
            Contact
          </p>
        </div>
        <div className="three">
          <h2>Services</h2>
          <div className="foto">
            <p>Pre Engineered Building</p>
            <p>Factory Shed</p>
            <p>Mezzanine Floor</p>
            <p>Industrial Shed</p>
            <p>Warehouse Shed</p>
            <p>Metal buildings</p>
          </div>
        </div>
        <div className="one">
          <h2>Get In Touch</h2>
          <p>
            <FaMapPin className="f-icon" /> No.33/20,Ramakrishnapuram 3rd
            Street,West Mambalam,Chennai,Tamil Nadu,600033
          </p>
          <p>
            <FaPhone className="f-icon" />
            +91 75500 00206
          </p>
          <p>
            <FaEnvelope className="f-icon" /> sales@smartroofings.in
          </p>
          <div className="icon">
            <Link className="i1">
              <FaFacebookF className="social" />
            </Link>
            <Link className="i2">
              <FaInstagram className="social" />
            </Link>
            <Link className="i3">
              <FaYoutube className="social" />
            </Link>
            <Link className="i4">
              <FaLinkedinIn className="social" />
            </Link>
            <Link className="i4">
              <FaTwitter className="social" />
            </Link>
            <Link className="i4">
              <FaPinterest className="social" />
            </Link>
          </div>
        </div>
        <div className="five">
          <div className="five-1">
            <small className="small">©</small>
            <a href="#">Copyright @2021 Smart Roofs and Fabs</a>
            <small>, All Rights Reserved</small>
          </div>
          <div className="five-2">
            <a href="#" className="f-a m-l">
              Home
            </a>
            <a href="#" className="f-a b-s">
              Cookies
            </a>
            <a href="#" className="f-a b-s">
              Help
            </a>
            <a href="#" className="f-a b-s last">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

import { Link } from "react-router-dom";
import "./block.scss";
import { FaAnglesRight, FaCheckDouble } from "react-icons/fa6";
function Block(p) {
  return (
    <div
      class="service-item d-flex h-100"
      data-aos={p.anime}
      data-aos-delay={p.delay}
    >
      <div class="service-img">{p.icon}</div>
      <div class="service-text p-5 pt-0">
        <div class="service-icon">{p.icon}</div>
        <h1 class="mb-3">{p.title}</h1>
        <p class="mb-4">{p.content}</p>
        <a class="btn btn-square rounded-circle">
          <FaAnglesRight />
        </a>
      </div>
    </div>
  );

  // <div data-aos={p.anime} data-aos-delay={p.delay} className="block">
  //     <div className="float"> {p.icon}</div>
  //     <h1>{p.title}</h1>
  //     <div className="content">{p.content}</div>
  //     <Link><FaAnglesRight /></Link>
  //     <div className="inOut">{p.icon}</div>
  // </div>
}
export default Block;

import "./service.scss";
function Service(p) {
  return (
    <div className="card" data-aos={'zoom-out-up'} data-aos-delay={200}>
      <div className="part1">
        <div className="icondiv">
          <img src={p.icon} alt="404" />
        </div>
        <img src={p.image} alt="404" />
        <div className="overlay"></div>
        <div className="part2">
          <div className="fig">
            <h2>{p.title}</h2>
            <p>{p.content}</p>
          </div>
        </div>
        <div className="part3">
          <div className="fig">
            <h2 >{p.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;

import "./service.scss";
function Service(p) {
    return <div className="card">
        <div className="part1">
            <div className="icondiv"><img src={p.icon} alt="404" /></div>
            <img src={p.image} alt="404" />
            <div className="overlay"></div>
            <div className="part2">
                <div>
                    <h2>{p.title}</h2>
                    <p>{p.content}</p>
                </div>
            </div>
        </div>
    </div>
}
export default Service;
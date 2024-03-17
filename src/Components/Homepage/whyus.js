
import "./whyus.scss";
function Why_us(p) {
    return <div className="whyus_block" >
        <div className="inner_div">
            <div><img src={p.icon} alt="404" /></div>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
        </div>
    </div>
}
export default Why_us;

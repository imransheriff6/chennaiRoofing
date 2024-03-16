
import "./whyus.scss";
function Why_us(p) {
    return <div className="whyus_block">
        <div className="inner_div">
            <div>{p.icon}</div>
            <p>{p.content}</p>
        </div>
    </div>
}
export default Why_us;

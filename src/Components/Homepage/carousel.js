import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg1 from "../Images/Content 1.jpg";
import bg2 from "../Images/Content 2.jpg";
import bg3 from "../Images/Content 3.jpg";

function DarkVariantExample() {
    return (
        <Carousel>
            <div>
                <img src={bg1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={bg2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={bg3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default DarkVariantExample;
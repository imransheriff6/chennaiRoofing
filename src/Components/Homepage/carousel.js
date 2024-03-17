import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg4 from "../Images/service-1.jpg";
import "./carousel.scss"

function DarkVariantExample() {
    return (
        <figure class="snip1543">
            <img src={bg4} alt="sample108" />
            <figcaption>
                <h3>Inverness McKenzie</h3>
                <p>The only skills I have the patience to learn are those that have no real application in life.</p>
            </figcaption>
            <a href="#"></a>
        </figure>
    );
}

export default DarkVariantExample;
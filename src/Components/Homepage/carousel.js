import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg4 from "../Images/service-1.jpg";
import "./carousel.scss"

function DarkVariantExample() {
    return (
        <>
            <figure class="snip1543">
                <img src={bg4} alt="sample108" />
                <figcaption>
                    <h3>Inverness McKenzie</h3>
                    <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                </figcaption>
                <a href="#"></a>
            </figure>
            <figure class="snip1543 hover"><img src={bg4} alt="sample100" />
                <figcaption>
                    <h3>Alan Fresco</h3>
                    <p>The real fun of living wisely is that you get to be smug about it.</p>
                </figcaption>
                <a href="#"></a>
            </figure>
            <figure class="snip1543"><img src={bg4} alt="sample101" />
                <figcaption>
                    <h3>Indigo Violet</h3>
                    <p>But Calvin is no kind and loving god! He's one of the old gods! He demands sacrifice! </p>
                </figcaption>
                <a href="#"></a>
            </figure>
            Run Pen
            Resources
        </>
    );
}

export default DarkVariantExample;
import { Link} from "react-router-dom";
import { Paisaje1 } from "./Paisaje1";
import { Paisaje2 } from "./Paisaje2";
import { Paisaje3 } from "./Paisaje3";
import { Paisaje4 } from "./Paisaje4";
import { Paisaje5 } from "./Paisaje5";

export const Navigation = () => {
    return  (
        <div className="container thumbnail-container mt-2">
            <Link to='/paisaje1' className="links">
            <figure className="thumbnail-image-size">
                <Paisaje1/>
                <figcaption>Montañas</figcaption>
            </figure>
            </Link>
            <Link to='/paisaje2' className="links">
            <figure className="thumbnail-image-size">
                <Paisaje2/>
                <figcaption>Playa</figcaption>
            </figure>
            </Link>
            <Link to='/paisaje3' className="links">
            <figure className="thumbnail-image-size">
                <Paisaje3/>
                <figcaption>Cachorrito</figcaption>
            </figure>
            </Link>
            <Link to='/paisaje4' className="links">
            <figure className="thumbnail-image-size">
                <Paisaje4/>
                <figcaption>Desierto</figcaption>
            </figure>
            </Link>
            <Link to='/paisaje5' className="links">
            <figure className="thumbnail-image-size">
                <Paisaje5/>
                <figcaption>Rios</figcaption>
            </figure>
            </Link>
        </div>
    )
}
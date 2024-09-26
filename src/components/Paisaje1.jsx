import PropTypes from "prop-types"
import paisaje1 from "../assets/img/pexels-1.jpg"

export const Paisaje1 = ({className}) => {
    return (
        <img src={paisaje1} alt="Paisaje Bonito 1" className={className}/>
    )
}
Paisaje1.propTypes = {
    className: PropTypes.string
}
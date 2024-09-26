import PropTypes from "prop-types"
import paisaje2 from "../assets/img/pexels-2.jpg"

export const Paisaje2 = ({className}) => {
    return (
        <img src={paisaje2} alt="Paisaje Bonito 2" className={className}/>
    )
}
Paisaje2.propTypes = {
    className: PropTypes.string
}
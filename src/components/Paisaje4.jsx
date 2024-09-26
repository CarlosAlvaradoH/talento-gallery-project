import PropTypes from "prop-types"
import paisaje4 from "../assets/img/pexels-4.jpg"

export const Paisaje4 = ({className}) => {
    return (
        <img src={paisaje4} alt="Paisaje Bonito 4" className={className}/>
    )
}
Paisaje4.propTypes = {
    className: PropTypes.string
}
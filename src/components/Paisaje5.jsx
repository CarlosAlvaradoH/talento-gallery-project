import PropTypes from "prop-types"
import paisaje5 from "../assets/img/pexels-5.jpg"

export const Paisaje5 = ({className}) => {
    return (
        <img src={paisaje5} alt="Paisaje Bonito 5" className={className}/>
    )
}
Paisaje5.propTypes = {
    className: PropTypes.string
}
import PropTypes from "prop-types"
import paisaje3 from "../assets/img/pexels-3.jpg"

export const Paisaje3 = ({className}) => {
    return (
        <img src={paisaje3} alt="Paisaje Bonito 3" className={className}/>
    )
}
Paisaje3.propTypes = {
    className: PropTypes.string
}
import PropTypes from "prop-types"
import paisaje6 from "../assets/img/pexels-6.jpg"

export const Paisaje6 = ({className}) => {
    return (
        <img src={paisaje6} alt="Paisaje Bonito 6" className={className}/>
    )
}
Paisaje6.propTypes = {
    className: PropType.string
}
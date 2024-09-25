import PropTypes from "prop-types"
import paisaje1 from "../assets/img/pexels-1.jpg"

export const Paisaje1 = ({props}) => {
    return (
        <img src={paisaje1} alt="Paisaje Bonito 1" className={props.className}/>
    )
}
Paisaje1.protoTypes = {
    className: PropType.string
}
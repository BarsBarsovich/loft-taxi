import './Button.css'
import PropTypes from "prop-types";

const Button = ({title}) => {
    return (
        <button className='button' type='submit'>
            {title}
        </button>
    );
};


Button.propTypes = {
    title: PropTypes.string
}

export default Button;


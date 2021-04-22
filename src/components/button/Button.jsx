import './Button.css'
import PropTypes from "prop-types";
import React from "react";

const Button = ({title, onClick}) => {
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


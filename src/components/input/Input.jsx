import * as React from "react";
import './Input.css';
import PropTypes from "prop-types";

const Input = ({title, type, placeholder, value, onChange}) => {
    return (
        <label className='login__label'>
            <p className='login__label-title'>{title}</p>
            <input type={type} placeholder={placeholder} value={value} className='login__input'
                   onChange={(e) => onChange(e.target.value)}/>
        </label>
    );
}

Input.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default Input;

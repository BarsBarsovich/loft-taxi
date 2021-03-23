import * as React from "react";
import './Input.css';

const Input = ({title, type, placeholder, value, onChange}) => {
    return (
        <label className='login__label'>
            <p className='login__label-title'>{title}</p>
            <input type={type} placeholder={placeholder} value={value} className='login__input'
                   onChange={(e) => onChange(e.target.value)}/>
        </label>
    );
}

export default Input;

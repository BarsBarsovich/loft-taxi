import * as React from "react";
import './Input.css';
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";

const Input = ({title, type, placeholder, value, onChange, className, isRequired, emailRequired}) => {
    const {
        register,
        formState: {errors}
    } = useForm();

    return (
        <label className={`login__label ${className}`} data-testid='input'>
            <p className='login__label-title'>{title}</p>
            <input type={type} placeholder={placeholder} value={value} className='login__input'
                {...register("emailRequiered", {required: true})}
            />
            {errors.emailRequiered && <span>Test</span>}
        </label>
    );
}

Input.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
}

export default Input;

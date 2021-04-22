import Button from "../../components/button/Button";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import './Register.css';
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {setRegister} from "../../store/actions/actions";


function Register(props) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const history = useHistory();


    const onSubmit = (data) => {
        const {emailRequired, nameRequired, passwordRequired} = data;
        props.setRegister(emailRequired, nameRequired, passwordRequired);
        history.push('/map');
    };
    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className="login-wrapper">
                <div className='login'>
                    <div className="login__container">
                        <p className='login-title'>Регистрация</p>
                        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                            <label className="login__label" data-testid='input'>
                                <p className='login__label-title'>Email*</p>
                                <input type="text" placeholder='mail@mail.ru' className='login__input'
                                       {...register("emailRequired", {required: true})}
                                />
                                {errors.emailRequiered && <span>Поле обязательно для заполнения</span>}
                            </label>
                            <label className="login__label" data-testid='input'>
                                <p className='login__label-title'>Как вас зовут?*</p>
                                <input type="text" placeholder='Петр Александрович' className='login__input'
                                       {...register("nameRequired", {required: true})}
                                />
                                {errors.nameRequired && <span>Поле обязательно для заполнения</span>}
                            </label>
                            <label className="login__label mt10" data-testid='input'>
                                <p className='login__label-title'>Придумайте пароль*</p>
                                <input type="password" placeholder='Введите пароль' className='login__input'
                                       {...register("passwordRequired", {required: true})}
                                />
                                {errors.passwordRequired && <span>Поле обязательно для заполнения</span>}
                            </label>

                            <Button title='Войти' type='submit' className='submit'/>
                        </form>
                        <div className="login__footer">
                            <span className='text'>Уже зарегестрированы?</span>
                            <Link to="/" className="link">
                                &nbsp;Войти
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
export const RegisterWithAuth = connect(
    null, {setRegister}
)(Register);

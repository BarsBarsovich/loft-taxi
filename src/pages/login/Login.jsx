import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import './Login.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {authenticate, getCard, getRoutes, setProfileAction} from "../../store/actions/actions";
import {useForm} from "react-hook-form";


export function LoginPage(props) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const history = useHistory();

    const submit = (data) => {
        const {email, password} = data;

        props.authenticate(email, password);

        if (props.isLoggedIn) {
            props.getRoutes();
            const token = props.token;
            props.getCard(token);
            history.push('/map');
        }


    }

    return <div className='wrapper'>
        <Sidebar/>
        <div className="login-wrapper">
            <div className='login'>
                <div className="login__container">
                    <p className='login-title'>Войти</p>
                    <form className='login-form' onSubmit={handleSubmit(submit)}>
                        <label className="login__label" data-testid='input'>
                            <p className='login__label-title'>Email*</p>
                            <input type="text" placeholder='mail@mail.ru' className='login__input'
                                   {...register("email", {required: true})}
                            />
                            {errors.email && <span>Поле обязательно для заполнения</span>}
                        </label>
                        <label className="login__label" data-testid='input'>
                            <p className='login__label-title'>Пароль*</p>
                            <input type="password" placeholder='mail@mail.ru' className='login__input'
                                   {...register("password", {required: true})}
                            />
                            {errors.password && <span>Поле обязательно для заполнения</span>}
                        </label>
                        <div className="login__forgot-password">
                            <a href="/" className='text'> Забыли пароль ?</a>
                        </div>
                        <Button title='Войти' type='submit'/>
                    </form>
                    <div className="login__footer">
                        <span className='text'>Новый пользователь?</span>
                        <Link className="link" to="/register">
                            &nbsp;Регистрация
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export const LoginPageAuth = connect(
    state => ({isLoggedIn: state.auth.isLoggedIn, routes: state.routes, token: state.auth.token}),
    {authenticate, getRoutes, getCard})
(LoginPage)


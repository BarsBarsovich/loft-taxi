import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import './Login.css';
import React, {useContext, useState} from "react";
import Input from "../../components/input/Input";
import {AuthContext} from "../../AuthContext";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {LOGIN} from "../../store/actions/actions";


export function LoginPage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const context = useContext(AuthContext);
    const history = useHistory();
    return <div className='wrapper'>
        <Sidebar/>
        <div className="login-wrapper">
            <div className='login'>
                <div className="login__container">
                    <p className='login-title'>Войти</p>
                    <form className='login-form' onSubmit={(e) => {
                        e.preventDefault();
                        if (!email || !password) {
                            return;
                        }

                        context.login(email, password);

                        setTimeout(() => {
                            if (context.isLoggedIn) {
                                history.push('/map')
                            }
                        })
                    }}>
                        <Input value={email} title='Email' type='text' placeholder='mail@mail.ru' onChange={setEmail}/>
                        <Input value={password} title='Пароль' type='password' placeholder='Введите пароль'
                               onChange={setPassword}/>
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
     state => ({isLoggedIn: state.auth.isLoggedIn}),
     {LOGIN})
 (LoginPage)


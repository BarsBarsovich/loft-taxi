import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import './Login.css';
import React, {useContext, useState} from "react";
import Input from "../../components/input/Input";
import {AuthContext, withAuth} from "../../AuthContext";


export function LoginPage({navigateTo}) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const context = useContext(AuthContext);
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

                        setTimeout(()=>{
                            if (context.isLoggedIn) {
                                navigateTo('map')
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
                        <span className='link' onClick={() => navigateTo('register')}>&nbsp;Регистрация</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

}


// export const LoginPageAuth = withAuth(LoginPage)


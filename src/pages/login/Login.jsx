import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import './Login.css';
import React, {useState} from "react";
import Input from "../../components/input/Input";


function LoginPage({navigateTo}) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    return <div className='wrapper'>
        <Sidebar/>
        <div className="login-wrapper">
            <div className='login'>
                <div className="login__container">
                    <p className='login-title'>Войти</p>
                    <form className='login-form' onSubmit={(e) =>{
                        e.preventDefault();
                        navigateTo('map');
                    }}>
                        <Input value='' title='Email' type='text' placeholder='mail@mail.ru' onChage={setEmail}/>
                        <Input value='' title='Пароль' type='password' placeholder='Введите пароль' onChange={setPassword}/>
                        <div className="login__forgot-password">
                            <a href="/" className='text'> Забыли пароль ?</a>
                        </div>
                        <Button title='Войти' type='submit' />
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

export default LoginPage;

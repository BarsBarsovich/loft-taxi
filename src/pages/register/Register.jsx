import Button from "../../components/button/Button";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Input from "../../components/input/Input";
import './Register.css';


function Register({navigateTo}) {
    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className="login-wrapper">
                <div className='login'>
                    <div className="login__container">
                        <p className='login-title'>Регистрация</p>
                        <form className='login-form'>
                            <Input title='Email*' type='text' placeholder='mail@mail.ru' value=''/>
                            <Input title='Как вас зовут?*' type='text' placeholder='Петр Александрович' value=''/>

                            <Input title='Придумайте пароль*' type='password' placeholder='Введите пароль' value=''/>
                            <Button title='Войти' type='submit' className='submit'/>
                        </form>
                        <div className="login__footer">
                            <span className='text'>Уже зарегестрированы?</span>
                            <span className='link' onClick={() => navigateTo('login')}>&nbsp;Войти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

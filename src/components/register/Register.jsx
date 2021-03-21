import Button from "../button/Button";
import * as React from "react";


function Register(){
    return (
        <div className="login-wrapper">
            <div className='login'>
                <div className="login__container">
                    <p className='login-title'>Регистрация</p>
                    <form className='login-form'>
                        <label className='login__label'>
                            <p className='login__label-title'>Email*</p>
                            <input type="text" placeholder='mail@mail.ru' className='login__input'/>
                        </label>
                        <label className='login__label'>
                            <p className='login__label-title'>Как вас зовут?*</p>
                            <input type="text" placeholder='Петр Александрович' className='login__input'/>
                        </label>

                        <label className='login__label'>
                            <p className='login__label-title'>Придумайте пароль*</p>
                            <input type="password" className='login__input' placeholder='Введите пароль'/>
                        </label>

                        <Button title='Войти' type='submit' className='submit'/>
                    </form>
                    <div className="login__footer">
                        <span className='text'>Уже зарегестрированы?</span>
                        <span className='link'>&nbsp;Войти</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

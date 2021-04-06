import Button from "../../components/button/Button";
import React, {useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Input from "../../components/input/Input";
import './Register.css';
import {Link} from "react-router-dom";


function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className="login-wrapper">
                <div className='login'>
                    <div className="login__container">
                        <p className='login-title'>Регистрация</p>
                        <form className='login-form'>
                            <Input title='Email*' type='text' placeholder='mail@mail.ru' value={email} onChange={setEmail} />
                            <Input title='Как вас зовут?*' type='text' placeholder='Петр Александрович' value={name} onChange={setName}/>

                            <Input title='Придумайте пароль*' type='password' placeholder='Введите пароль' value={password} onChange={setPassword}/>
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

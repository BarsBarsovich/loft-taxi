import Sidebar from "../sidebar/Sidebar";
import Button from "../button/Button";
import './Login.css';
import * as React from "react";
import MainPage from "../mainpage/Mainpage";


class LoginPage extends React.Component {

    state = {activePage: 'login'}

    navigateTo = (page) => {
        this.setState({activePage: page});
    }

    renderLogin = ()=> {
        if (this.state.activePage === 'login'){
            return <div className='wrapper'>
                <Sidebar/>
                <div className="login-wrapper">
                    <div className='login'>
                        <div className="login__container">
                            <p className='login-title'>Войти</p>
                            <form className='login-form' onSubmit={() => this.navigateTo('map')}>
                                <label className='login__label'>
                                    <p className='login__label-title'>Email</p>
                                    <input type="text" placeholder='mail@mail.ru' className='login__input'/>
                                </label>
                                <label className='login__label'>
                                    <p className='login__label-title'>Пароль</p>
                                    <input type="password" className='login__input' placeholder='Введите пароль'/>
                                </label>
                                <div className="login__forgot-password">
                                    <a href="/" className='text'> Забыли пароль ?</a>
                                </div>

                                <Button title='Войти' type='submit'/>
                            </form>
                            <div className="login__footer">
                                <span className='text'>Новый пользователь?</span>
                                <span className='link'>&nbsp;Регистрация</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        }
    }

    renderMapPage = ()=>{
        if (this.state.activePage === 'map'){
            return <MainPage/>
        }
    }


    render() {
        return (
            <div className='login-page'>
                {this.renderLogin()}
                <main className='main'>
                    {this.renderMapPage()}
                </main>
            </div>
        );
    }
}

export default LoginPage;

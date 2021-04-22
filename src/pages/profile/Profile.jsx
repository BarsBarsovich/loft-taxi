import Header from "../../components/header/Header";
import React from 'react';
import {connect} from "react-redux";
import {getCard, LOGOUT_ACTION, setProfile, setProfileAction} from "../../store/actions/actions";
import './Profile.css';
import Button from "../../components/button/Button";
import logo from './card-logo.svg';
import chip from './card-chip.svg'
import circle from './circle.png'
import {useForm} from "react-hook-form";

function Profile(props) {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();


    const setProfileInfo = (data) => {
        const token = props.token;
        const {cardNumber, expiryDate, name, cvc} = data;


        props.setProfile(cardNumber, expiryDate, name, cvc, token);

    }

    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="profile">
                    <div className="profile__container">
                        <p className="title">Профиль</p>
                        <span className="profile-subtitle">Ввдеите платежные данные</span>
                        <form onSubmit={handleSubmit(setProfileInfo)}>
                            <div className="profile__values">
                                <div className="profile__fio">
                                    <label className="login__label" data-testid='input'>
                                        <p className='login__label-title'>Имя владельца</p>
                                        <input type="text" defaultValue={props.profileInfo.cardName}
                                               placeholder='Имя владельца' className='login__input'
                                               {...register("name", {required: true})}
                                        />
                                        {errors.name && <span>Поле обязательно для заполнения</span>}
                                    </label>
                                    <label className="login__label" data-testid='input'>
                                        <p className='login__label-title'>Номер карты</p>
                                        <input defaultValue={props.profileInfo.cardNumber} type="text"
                                               placeholder='Номер карты' className='login__input'
                                               {...register("cardNumber", {required: true})}
                                        />
                                        {errors.cardNumber && <span>Поле обязательно для заполнения</span>}
                                    </label>

                                    <div className="profile__card-dates">
                                        <label className="login__label mr35" data-testid='input'>
                                            <p className='login__label-title'>MM/YY</p>
                                            <input defaultValue={props.profileInfo.expiryDate} type="number" placeholder='MM/YY' className='login__input mr35'
                                                   {...register("expiryDate", {required: true})}
                                            />
                                            {errors.expiryDate && <span>Поле обязательно для заполнения</span>}
                                        </label>
                                        <label className="login__label" data-testid='input'>
                                            <p className='login__label-title'>CVC</p>
                                            <input type="number" placeholder='CVC' className='login__input no_mt'
                                                   defaultValue={props.profileInfo.cvc}
                                                   {...register("cvc", {required: true})}
                                            />
                                            {errors.cvc && <span>Поле обязательно для заполнения</span>}
                                        </label>
                                    </div>
                                </div>
                                <div className="profile__card">
                                    <div className="card">
                                        <div className="card__container">
                                            <div className="card__row">
                                                <img src={logo} alt=""/>
                                                <span className='card-date'>
                                                    {props.profileInfo.expiryDate}
                                                </span>

                                            </div>
                                            <div className="card__row">
                                                {props.profileInfo.cardNumber}
                                            </div>
                                            <div className="card__row">
                                                <img src={chip} alt=""/>
                                                <div className="circle-wrapper">
                                                    <img src={circle} alt=""/>
                                                    <img src={circle} alt="" className="second-circle"/>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button__container">
                                <Button title="Сохранить"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
export const ProfileWithAuth = connect(
    state => ({token: state.auth.token, profileInfo: state.profile.profile}), {
        LOGOUT_ACTION,
        setProfile,
        setProfileAction,
        getCard
    }
)(Profile);

import Header from "../../components/header/Header";
import React, {useState} from 'react';
import {connect} from "react-redux";
import {LOGOUT_ACTION, setProfile} from "../../store/actions/actions";
import './Profile.css';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import logo from './card-logo.svg';
import chip from './card-chip.svg'
import circle from './circle.png'

function Profile(props) {

    const [name, setName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cardMoth, setCardMonth] = useState();
    const [cvc, setCVC] = useState();


    const setProfileInfo = () => {
        const token = props.token;

        if (!cardNumber ||!cardMoth || !name || !cvc || !token){
            return;
        }
        props.setProfile(cardNumber, cardMoth, name, cvc, token);
    }

    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="profile">
                    <div className="profile__container">
                        <p className="title">Профиль</p>
                        <span className="profile-subtitle">Ввдеите платежные данные</span>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            setProfileInfo()
                        }}>
                            <div className="profile__values">
                                <div className="profile__fio">
                                    <Input value={name} title='Имя владельца' type='text' placeholder='Имя владельца'
                                           onChange={setName}/>
                                    <Input value={cardNumber} title='Номер карты' type='text' placeholder='Номер карты'
                                           onChange={setCardNumber}/>
                                    <div className="profile__card-dates">
                                        <Input value={cardMoth} title='MM/YY' type='number' placeholder='MM/YY'
                                               onChange={setCardMonth} className='mr35'/>
                                        <Input value={cvc} title='CVC' type='password' placeholder='CVC'
                                               onChange={setCVC} className='no_mt'/>
                                    </div>
                                </div>
                                <div className="profile__card">
                                    <div className="card">
                                        <div className="card__container">
                                            <div className="card__row">
                                                <img src={logo} alt=""/>
                                                <span className='card-date'>{cardMoth}</span>

                                            </div>
                                            <div className="card__row">
                                                {cardNumber}
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
    state => ({token: state.auth.token}), {LOGOUT_ACTION, setProfile}
)(Profile);

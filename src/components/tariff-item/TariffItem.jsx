import React from 'react';
import './TariffItem.css';
import standart from './standart.svg'
import premium from './premium.svg'
import business from './bussiness.svg'

const TariffItem = ({title, price, name}) =>{
    return (
        <>
            <div className="item">
                <div className="item__container">
                    <p className="item__title">{title}</p>
                    <p className="subtitle">Стоимость</p>
                    <p className="cost">{price} Р</p>
                    {name === 'standart' && <img src={standart} alt="" className="car"/>}
                    {name === 'premium' && <img src={premium} alt="" className="car"/>}
                    {name === 'business' && <img src={business} alt="" className="car"/>}

                </div>
            </div>
        </>

    )
}

export default TariffItem

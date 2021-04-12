import './Navigtion.css';
import {Link} from "react-router-dom";
import React from "react";

const Navigation = () => {
    const navigationTitles = [{title: 'Карта', key: '/map'}, {title: 'Профиль', key: '/profile'}, {
        title: 'Выйти',
        key: '/'
    }];
    return (
        <ul className="nav__list" data-testid="nav">
            {navigationTitles.map((item, index) => (
                <li key={index} className="nav__item">
                    <Link to={item.key} className="nav__item-link" >{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}


export default Navigation;

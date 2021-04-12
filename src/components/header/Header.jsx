import './Header.css';
import Navigation from "../navigation/Navigation";
import React from "react";

const Header = () => {
    return (<header className="header">
        <div className="header__container container" data-testid="header">
            <div className="logo">
                <a href="/">
                    <img src="logo.png" alt="logo"/>
                </a>
            </div>
            <Navigation/>
        </div>
    </header>)
};

export default Header;

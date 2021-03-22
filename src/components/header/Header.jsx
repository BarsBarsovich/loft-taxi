import './Header.css';
import Navigation from "../navigation/Navigation";
const Header = ({navigateTo}) => {
    return (<header className="header">
        <div className="header__container container">
            <div className="logo">
                <a href="/">
                    <img src="logo.png" alt="logo"/>
                </a>
            </div>
            <Navigation navigateTo={navigateTo} />
        </div>
    </header>)
};


export default Header;

import './Mainpage.css';
import * as React from "react";
import Profile from "../profile/Porfile";
import Map from "../map/Map";

class Mainpage extends React.Component{
    state = {activePage: 'map'}
    navigationTitles = [{title: 'Карта', key: 'map'}, {title: 'Профиль', key: 'profile'}, {title: 'Выйти', key: 'logout'}];

    navigateTo = (activePage) =>{
        this.setState({activePage})
    }

    renderSection(){
        switch (this.state.activePage){
            case "map":
                return <Map/>;
            case "profile":
                return <Profile/>;
        }
    }

    render(){
        return(
            <div className="map">
                <header className="header">
                    <div className="header__container container">
                        <div className="logo">
                            <a href="/">
                                <img src="logo.png" alt="logo" />
                            </a>
                        </div>
                        <ul className="nav__list">
                            {this.navigationTitles.map((item, index) => (
                                <li key={index} className="nav__item">
                                    <span onClick={() => this.navigateTo(item.key)} className="nav__item-link">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
                <main className='main'>
                    {this.renderSection()}
                </main>
            </div>
        )
    }
}

export default Mainpage;


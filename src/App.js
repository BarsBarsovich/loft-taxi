import './App.css';
import React from 'react';
import {LoginPageAuth, LoginPage} from "./pages/login/Login";
import Map, {MapWithAuth} from "./pages/map/Map";
import Profile, {ProfileWithAuth} from "./pages/profile/Porfile";
import Register from "./pages/register/Register";
import {withAuth} from "./AuthContext";

class App extends React.Component {
    state = {activePage: 'login'}

    navigateTo = (activePage) => {
        if (activePage === 'logout'){
            this.props.logout();
        }
        if (this.props.isLoggedIn || activePage === 'register') {
            this.setState({activePage})
        }
    }

    render() {
        return (
            <div className="App">
                <main className="main">
                    {this.state.activePage === 'login' && <LoginPage navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'map' && <MapWithAuth navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'profile' && <Profile navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'logout' && <LoginPage navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'register' && <Register navigateTo={this.navigateTo}/>}
                </main>
            </div>
        );
    }
}

export default withAuth(App);

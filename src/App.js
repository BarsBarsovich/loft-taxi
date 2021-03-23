import './App.css';
import React from 'react';
import LoginPage from "./pages/login/Login";
import Map from "./pages/map/Map";
import Profile from "./pages/profile/Porfile";
import Register from "./pages/register/Register";

class App extends React.Component {
    state = {activePage: 'login'}

    navigateTo = (activePage) => {
        this.setState({activePage});
    }

    render() {
        return (
            <div className="App">
                <main className="main">
                    {this.state.activePage === 'login' && <LoginPage navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'map' && <Map navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'profile' && <Profile navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'logout' && <LoginPage navigateTo={this.navigateTo}/>}
                    {this.state.activePage === 'register' && <Register navigateTo={this.navigateTo}/>}
                </main>
            </div>
        );
    }
}

export default App;

import './App.css';
import React from 'react';
import {LoginPage} from "./pages/login/Login";
import {MapWithAuth} from "./pages/map/Map";
import Profile from "./pages/profile/Porfile";
import Register from "./pages/register/Register";
import {withAuth} from "./AuthContext";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

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
                    <Switch>
                        <Route path="/" component={LoginPage} exact/>
                        <Route path="/map" component={MapWithAuth} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/register" component={Register} />
                    </Switch>
                    {/*{this.state.activePage === 'login' && <LoginPage navigateTo={this.navigateTo}/>}*/}
                    {/*{this.state.activePage === 'map' && <MapWithAuth navigateTo={this.navigateTo}/>}*/}
                    {/*{this.state.activePage === 'profile' && <Profile navigateTo={this.navigateTo}/>}*/}
                    {/*{this.state.activePage === 'logout' && <LoginPage navigateTo={this.navigateTo}/>}*/}
                    {/*{this.state.activePage === 'register' && <Register navigateTo={this.navigateTo}/>}*/}
                </main>
            </div>
        );
    }
}

export default connect(
    state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

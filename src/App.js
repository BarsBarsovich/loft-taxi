import './App.css';
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import MapPage from "./pages/map/Map";
import {LoginPageAuth} from "./pages/login/Login";
import {ProfileWithAuth} from "./pages/profile/Profile";
import Register from "./pages/register/Register";

class App extends React.Component {
    state = {activePage: 'login'}

    render() {
        return (
            <div className="App">
                <main className="main">
                    <Switch>
                        <Route path="/" component={LoginPageAuth} exact/>
                        <PrivateRoute path="/map" component={MapPage}/>
                        <PrivateRoute path="/profile" component={ProfileWithAuth}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </main>
            </div>
        );
    }
}


export const PrivateRoute = connect((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
}))(({component: Component, isLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/"/>
            )
        }
    />
));
export default connect(
    state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);


import './App.css';
import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import MapPage, {MapPageConnect} from "./pages/map/Map";

class App extends React.Component {
    state = {activePage: 'login'}

    navigateTo = (activePage) => {
        if (activePage === 'logout') {
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
                    <MapPageConnect/>
                    {/*<Switch>*/}
                    {/*    <Route path="/" component={LoginPageAuth} exact/>*/}
                    {/*    <PrivateRoute path="/map" component={MapPage}/>*/}
                    {/*    <PrivateRoute path="/profile" component={Profile}/>*/}
                    {/*    <Route path="/register" component={Register}/>*/}
                    {/*</Switch>*/}
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


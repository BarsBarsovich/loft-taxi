import React from 'react';

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    function login(email, password) {
        debugger
        setIsLoggedIn(email === 'mail@mail.ru' && password === 'password');
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <Component {...value} {...this.props} />

                        }
                    }
                </AuthContext.Consumer>
            )
        }

    }
}

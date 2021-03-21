import './App.css';
import LoginPage from "./components/login/Login";
import React from 'react';
import Register from "./components/register/Register";

function App() {
    return (
        <div className="App">
            {/* <Register/> */}
            <LoginPage/>
        </div>
    );
}

export default App;

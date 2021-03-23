import Header from "../../components/header/Header";
import React from 'react';

function Profile({navigateTo}) {
    return(
        <>
            <Header navigateTo={navigateTo}/>
            <h1>Profile</h1>
        </>
   )
}

export default Profile;

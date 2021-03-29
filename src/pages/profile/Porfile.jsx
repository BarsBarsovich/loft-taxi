import Header from "../../components/header/Header";
import React from 'react';
import {withAuth} from "../../AuthContext";

function Profile({navigateTo}) {
    return(
        <>
            <Header navigateTo={navigateTo}/>
            <h1>Profile</h1>
        </>
   )
}

export default Profile;
// export const ProfileWithAuth = withAuth(Profile);

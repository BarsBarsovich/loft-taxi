import Header from "../../components/header/Header";
import React from 'react';
import {connect} from "react-redux";
import {LOGOUT} from "../../store/actions/actions";

function Profile() {
    return(
        <>
            <Header/>
            <h1>Profile</h1>
        </>
   )
}

export default Profile;
export const ProfileWithAuth = connect(
    null, {LOGOUT}

)(Profile);

import Header from "../../components/header/Header";
import React, {useState} from 'react';
import Mapbox from "../../components/mapbox/Mapbox";
import {AuthContext, withAuth} from "../../AuthContext";

function Map({navigateTo}) {

    const context = useState(AuthContext);

    return <>
        <Header navigateTo={navigateTo}/>
        <Mapbox/>
    </>

}

export default Map;

export const MapWithAuth = withAuth(Map)

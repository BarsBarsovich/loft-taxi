import Header from "../../components/header/Header";
import React from 'react';
import Mapbox from "../../components/mapbox/Mapbox";
import {withAuth} from "../../AuthContext";

function Map({navigateTo}) {
    return <>
        <Header navigateTo={navigateTo}/>
        <Mapbox/>
    </>

}

export default Map;

export const MapWithAuth = withAuth(Map)

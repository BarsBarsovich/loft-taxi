import Header from "../../components/header/Header";
import React from 'react';
import {MapboxConnect} from "../../components/mapbox/Mapbox";

function MapPage(props) {
    return <>
        <Header/>
        <MapboxConnect/>
    </>

}

export default MapPage;

import Header from "../../components/header/Header";
import React from 'react';
import Mapbox from "../../components/mapbox/Mapbox";

function Map({navigateTo}) {
    return <>
        <Header navigateTo={navigateTo}/>
        <Mapbox/>
    </>

}

export default Map;

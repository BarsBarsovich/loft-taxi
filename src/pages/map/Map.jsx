import Header from "../../components/header/Header";
import React from 'react';
import Mapbox from "../../components/mapbox/Mapbox";
import {connect} from "react-redux";
import {getRoutes} from "../../store/actions/actions";

function MapPage(props) {
    props.getRoutes();
    const routes = props.routesList;
    debugger

    return <>
        <Header/>
        <Mapbox routesList={routes}/>
    </>

}

// export default MapPage;


export const MapPageConnect = connect(state => ({routesList: state.routes}), {getRoutes})(MapPage)

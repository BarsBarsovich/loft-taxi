import Header from "../../components/header/Header";
import React, {useEffect} from 'react';
import {MapboxConnect} from "../../components/mapbox/Mapbox";
import {connect} from "react-redux";
import {getCard, getRoutes} from "../../store/actions/actions";

function MapPage(props) {
    useEffect(() => {
        props.getRoutes();
        const token = props.token;
        props.getCard(token);
    })
    return <>
        <Header/>
        <MapboxConnect/>
    </>
}

export default connect(
    state => ({token: state.auth.token}),
    {getRoutes, getCard})
(MapPage);

// export  const MapPageConnect = connect(
// (MapPage);

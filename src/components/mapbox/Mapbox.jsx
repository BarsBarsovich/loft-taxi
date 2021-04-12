import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import './Mapbox.css';
import OrderForm from "../order-form/Order";
import {connect} from "react-redux";
import {getRoutes, routes} from "../../store/actions/actions";
import MapPage from "../../pages/map/Map";

const MAP_TOKEN = 'pk.eyJ1IjoiYmFyczExODkiLCJhIjoiY2sydDk2bGxpMTViMjNpcWJieXR2YW03biJ9.gJoHbjoQT-xmMVDBHOI3Mg';

class Mapbox extends Component {
    map = null;

    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = MAP_TOKEN;
        debugger
        // this.props.getRoutes();

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            center: [37.61, 55.75],
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
        });


    }

    componentWillUnmount() {
        this.map.remove();
    }


    render() {
        console.log(this.props.routesList);
        return <div className='map-container'>
            <div data-testid="map" className='map' ref={this.mapContainer}>
                <OrderForm routes={this.props.routesList}/>

            </div>
        </div>
    }
}

export default Mapbox;


// export const MapboxConnect = connect(
//     state => ({routes: state.routes}),
//     {getRoutes})
// (Mapbox)

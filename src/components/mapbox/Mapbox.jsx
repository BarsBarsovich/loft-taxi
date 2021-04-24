import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import './Mapbox.css';
import {OrderFormConnect} from "../order-form/Order";
import {connect} from "react-redux";

const MAP_TOKEN = 'pk.eyJ1IjoiYmFyczExODkiLCJhIjoiY2sydDk2bGxpMTViMjNpcWJieXR2YW03biJ9.gJoHbjoQT-xmMVDBHOI3Mg';

class Mapbox extends Component {
    map = null;
    mapContainer = React.createRef();

    drawRoute(coordinates) {
        this.map.flyTo({
            center: coordinates[0],
            zoom: 15
        });
        this.map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    };

    componentDidMount() {
        mapboxgl.accessToken = MAP_TOKEN;
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            center: [37.61, 55.75],
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
        });
    }

    componentDidUpdate() {
        if (this.props.coords) {
            this.drawRoute(this.props.coords)
        }
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return <div className='map-container'>
            <div data-testid="map" className='map' ref={this.mapContainer}>
                {this.props.isProfileFilled && <OrderFormConnect/>}
            </div>
        </div>
    }
}

export const MapboxConnect = connect(state => ({
    isProfileFilled: state.profile.isProfileFilled,
    coords: state.coords.coords
}), null)(Mapbox)

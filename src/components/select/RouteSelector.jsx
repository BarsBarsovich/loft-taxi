import {MenuItem, Select} from "@material-ui/core";
import React from 'react';
import './RouteSelector.css';
import close from './Vector.svg';
import nav from './nav.svg';

const RouteSelector = ({routes, onChange, mode, value, dropValue}) => {
    return (
        <div className="selector-wrapper">
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                className="select"
                onChange={(event) => onChange(event.target.value)}
                value={value}
            >
                {
                    routes && routes.map((item, index) => {
                        return <MenuItem value={item} key={index}>
                            <span className="selected-item">{item}</span>
                        </MenuItem>

                    })
                }
            </Select>
            <img src={close} alt="" className="close-icon" onClick={()=> dropValue()}/>
            {mode === 'from' && <div className="icon circle"></div>}
            {mode === 'to' && <img src={nav} alt="" className="icon"/>}
        </div>
    )
}

export default RouteSelector


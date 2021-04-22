import './Order.css'
import {connect} from "react-redux";
import RouteSelector from "../select/RouteSelector";
import {useState} from "react";
import Button from "../button/Button";
import TariffItem from "../tariff-item/TariffItem";
import {setAddress} from "../../store/actions/actions";

const OrderForm = (props) => {
    const [fromRouteValue, setFromValue] = useState();
    const [toRouteValue, setToValue] = useState();


    return <>
        <form className="routes-wrapper" onSubmit={(e) => {
            e.preventDefault();
            
            if (!fromRouteValue && !toRouteValue) {
                return;
            }

            props.setAddress(fromRouteValue, toRouteValue);

        }
        }>
            <div className="routes-container">
                <div className="points-selector">
                    <RouteSelector routes={props.routes && props.routes.filter(item => item !== toRouteValue)}
                                   onChange={setFromValue} mode="from" value={fromRouteValue}/>
                    <RouteSelector routes={props.routes && props.routes.filter(item => item !== fromRouteValue)}
                                   onChange={setToValue} mode="to" value={toRouteValue}/>
                </div>
            </div>
            <div className="splitter"></div>
            <div className="tariff-selector">
                <div className="tariff-list">
                    <TariffItem name="standart" title="Стандарт" price="150"/>
                    <TariffItem name="premium" title="Премиум" price="250"/>
                    <TariffItem name="business" title="Бизнес" price="300"/>
                </div>
                <Button title="Заказать"/>
            </div>
        </form>
    </>
}

export const OrderFormConnect = connect(state => ({
    routes: state.routes.routes,
}), {setAddress})(OrderForm);



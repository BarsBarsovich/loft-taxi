import './Order.css'
import {MenuItem, Select} from "@material-ui/core";

const OrderForm = ({routes}) => {
    debugger
    return <>
        <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            className="select"
        >

            <MenuItem value="">
                 <em>None</em>
            </MenuItem>
            {/*// <MenuItem value={20}>Twenty</MenuItem>*/}
            {/*// <MenuItem value={30}>Thirty</MenuItem>*/}
        </Select>
    </>
}

export default OrderForm;



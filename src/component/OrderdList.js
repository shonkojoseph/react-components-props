import React from "react";
import Order from "./Order";

function OrderList (){
    return(
<div className="blue">
    <h1>Order</h1>
    <Order name="Iphone 15" price={1}/>
</div>
    )
}
export default OrderList;
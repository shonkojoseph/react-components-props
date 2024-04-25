import React from "react"

function Order ({name , price}){
    return(
        <div>
            <h1>{name}</h1>
            <p>the money paid{price}</p>
        </div>
    )
}
export default Order;
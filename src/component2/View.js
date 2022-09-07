import React from 'react';
import { useSelector} from "react-redux"

function View(){
    const product = useSelector(state => state.product.value);
    console.log(product)
    return(
        <div>
            <h1> Product details</h1>
            <p>Product Name : {product.name}</p>
            <p>price : {product.price}</p>
            <p>Quantity : {product.quantity}</p>
        </div>
    )
}

export default View;
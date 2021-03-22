import React, { useContext } from 'react'
import { search } from '../../App'
import './Cart.css'

function Cart() {
    const [serchdata,setSearch]=useContext(search)
    console.log(serchdata)
    return (
        <div className="cart">
            <h1>name</h1>
            <h1>{serchdata.name}</h1>
            <p>{serchdata.price}</p>
            <p>{serchdata.price1}</p>
            <p>{serchdata.price2}</p>
            <img src={serchdata.img} alt=""/>
            <p>{serchdata.sit}</p>

        </div>
    )
}

export default Cart

import React, {useContext} from 'react'
import {BoxIfc, ItemIfc, UserContext, UserIfc} from "../context/UserContext"

function Boxes() {
    const { user, setUser } = useContext(UserContext)
    console.log('User in Boxes: ', user)
    return (
        <div className="app">
            <h1>Boxes</h1>
            <ul>
                { user.BoxArr && user.BoxArr[0].itemArr ? user.BoxArr[0].itemArr.map((item: ItemIfc) => (
                    <li key={item.id}><strong>Name:</strong>{item.name}&nbsp;&nbsp;<strong>quantity: </strong>{item.quantity}</li>
                )) : <></>}
            </ul>
        </div>
    )
}

export default Boxes
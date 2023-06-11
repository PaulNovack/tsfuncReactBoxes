import React, {useContext} from 'react'
import {BoxIfc, UserContext, UserIfc} from "../context/UserContext"

function Boxes() {
    const { user, setUser } = useContext(UserContext)
    console.log('User in Boxes: ', user)
  return (
    <div className="app">
      <h1>Boxes</h1>
        <ul>
        { user.BoxArr ? user.BoxArr.map((box: BoxIfc) => (
            <li key={box.id}><strong>Name:</strong>{box.name}&nbsp;&nbsp;<strong>weight: </strong>{box.weight}</li>
            )) : <></>}
        </ul>
    </div>
  )
}

export default Boxes

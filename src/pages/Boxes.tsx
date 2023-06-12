import React, { useContext } from 'react'
import { BoxIfc, UserContext } from '../context/UserContext'
import Boxe from '../components/Boxe'

function Boxes() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user.BoxArr)
  return (
    <div className="app">
      <strong>List of Boxes</strong>
      {user.BoxArr ? (
        user.BoxArr.map((box: BoxIfc, index: number) => (
          <>
            <Boxe box={box} index={index} />
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default Boxes

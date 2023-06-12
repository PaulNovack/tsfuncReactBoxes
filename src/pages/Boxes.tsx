import React, { useContext } from 'react'
import { BoxIfc, UserContext } from '../context/UserContext'
import Boxe from '../components/Boxe'
import { BrowserView, MobileView } from 'react-device-detect'

function Boxes() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user.BoxArr)
  return (
    <div className="app">
      <MobileView>
        <strong>List of Boxes</strong>
        {user.BoxArr ? (
          user.BoxArr.map((box: BoxIfc, index) => (
            <>
              <Boxe box={box} index={index} />
            </>
          ))
        ) : (
          <></>
        )}
      </MobileView>
      <BrowserView>
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
      </BrowserView>
    </div>
  )
}

export default Boxes

import React, { useContext } from 'react'
import { BoxIfc, UserContext } from '../context/UserContext'
import Boxe from '../components/Boxe'
import { Grid, GridItem } from '@chakra-ui/react'

function Boxes() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user.BoxArr)
  return (
    <div className="app">
      <strong>List of Boxes</strong>
      {user.BoxArr ? (
        user.BoxArr.map((box: BoxIfc) => (
          <>
            <Boxe box={box} />
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default Boxes

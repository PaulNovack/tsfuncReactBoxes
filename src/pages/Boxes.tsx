import React, { useContext } from 'react'
import { BoxIfc, UserContext } from '../context/UserContext'
import Boxe from '../components/Boxe'
import { Grid, GridItem, Image } from '@chakra-ui/react'

function Boxes() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user.BoxArr)
  return (
    <div className="app">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)">
        <GridItem rowSpan={3} colSpan={1}>
          Image
        </GridItem>
        <GridItem colSpan={4}>Name</GridItem>
        <GridItem colSpan={4}>Weight</GridItem>
      </Grid>
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

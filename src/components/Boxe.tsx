import React, { useState } from 'react'
import { BoxIfc } from '../context/UserContext'
import { GridItem, Grid, Image, Input } from '@chakra-ui/react'
function Boxe({ box }: { box: BoxIfc }) {
  const [name, setName] = useState<string>(box.name)
  const [weight, setWeight] = useState<number>(box.weight)
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value))
  }
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)">
      <GridItem rowSpan={3} colSpan={1}>
        <Image
          padding={'.2rem'}
          src={`/boxes-images/${box.picture}`}
          alt={box.name}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <strong>Name:</strong>{' '}
        <Input
          width={'10rem'}
          name={'name'}
          value={box.name}
          onChange={handleNameChange}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <strong>Weight:</strong>{' '}
        <Input
          width={'10rem'}
          name={'weight'}
          value={box.weight}
          onChange={handleWeightChange}
        />
      </GridItem>
    </Grid>
  )
}

export default Boxe

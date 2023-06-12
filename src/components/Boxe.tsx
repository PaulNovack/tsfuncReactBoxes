import React, { useState } from 'react'
import { BoxIfc } from '../context/UserContext'
import { GridItem, Grid, Image, Input, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'

function Boxe({ box, index }: { box: BoxIfc; index: number }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState<string>(box.name)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [weight, setWeight] = useState<number>(box.weight)
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value))
  }
  return (
    <>
      <BrowserView>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          key={index}
        >
          <GridItem rowSpan={4} colSpan={2}>
            <Image
              padding={'.2rem'}
              src={`/boxes-images/${box.picture}`}
              alt={box.name}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              className="boxInput"
              padding={'.2rem'}
              data-id={box.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Name'}
              width={'16rem'}
              name={'name'}
              defaultValue={box.name}
              onChange={handleNameChange}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text padding={'.5rem'} textAlign={'left'} fontSize="sm">
              Weight:
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              className="boxInput"
              data-id={box.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Weight'}
              width={'3rem'}
              name={'weight'}
              defaultValue={box.weight}
              onChange={handleWeightChange}
            />{' '}
            <Button colorScheme="teal">
              <Link to={`/items?box_id=${index}`}>View Items</Link>
            </Button>
          </GridItem>
        </Grid>
      </BrowserView>
      <MobileView>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
          <GridItem rowSpan={4} colSpan={2}>
            <Image
              padding={'.2rem'}
              src={`/boxes-images/${box.picture}`}
              alt={box.name}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              className="boxInput"
              padding={'.2rem'}
              data-id={box.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Name'}
              width={'16rem'}
              name={'name'}
              defaultValue={box.name}
              onChange={handleNameChange}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text padding={'.5rem'} textAlign={'left'} fontSize="sm">
              Weight:
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              className="boxInput"
              data-id={box.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Weight'}
              width={'3rem'}
              name={'weight'}
              defaultValue={box.weight}
              onChange={handleWeightChange}
            />{' '}
            <Button colorScheme="teal">
              <Link to={`/items?box_id=${index}`}>View Items</Link>
            </Button>
          </GridItem>
        </Grid>
      </MobileView>
    </>
  )
}

export default Boxe

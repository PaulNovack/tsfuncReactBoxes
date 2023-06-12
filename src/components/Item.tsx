import React, { useState } from 'react'
import { Grid, GridItem, Image, Input, Text } from '@chakra-ui/react'
import { ItemIfc } from '../context/UserContext'
import { BrowserView, MobileView } from 'react-device-detect'

function Item({ item }: { item: ItemIfc }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState<string>(item.name)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [weight, setWeight] = useState<number>(item.quantity)
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value))
  }
  return (
    <>
      <MobileView>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
          <GridItem rowSpan={4} colSpan={2}>
            <Image
              padding={'.2rem'}
              src={`/boxes-images/${item.picture}`}
              alt={item.name}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              className="boxInput"
              padding={'.2rem'}
              data-id={item.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Name'}
              width={'14rem'}
              name={'name'}
              defaultValue={item.name}
              onChange={handleNameChange}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text padding={'.4rem'} textAlign={'left'} fontSize="sm">
              Quantity:
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              className="boxInput"
              data-id={item.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'quantity'}
              width={'3rem'}
              name={'weight'}
              defaultValue={item.quantity}
              onChange={handleWeightChange}
            />{' '}
          </GridItem>
        </Grid>
      </MobileView>
      <BrowserView>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
          <GridItem rowSpan={4} colSpan={2}>
            <Image
              padding={'.2rem'}
              src={`/boxes-images/${item.picture}`}
              alt={item.name}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              className="boxInput"
              padding={'.2rem'}
              data-id={item.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'Name'}
              width={'14rem'}
              name={'name'}
              defaultValue={item.name}
              onChange={handleNameChange}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text padding={'.4rem'} textAlign={'left'} fontSize="sm">
              Quantity:
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              className="boxInput"
              data-id={item.id}
              size={'sm'}
              colorScheme="teal"
              variant="outline"
              placeholder={'quantity'}
              width={'3rem'}
              name={'weight'}
              defaultValue={item.quantity}
              onChange={handleWeightChange}
            />{' '}
          </GridItem>
        </Grid>
      </BrowserView>
    </>
  )
}

export default Item

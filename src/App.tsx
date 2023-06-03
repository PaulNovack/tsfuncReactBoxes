import React, { type ReactElement } from 'react'
import {
  ExampleProvider,
  Greet,
  UserProvider,
  Person
} from './context/Application'

function App(): ReactElement {
  return (
    <>
      <ExampleProvider>
        <Greet />
      </ExampleProvider>
      <UserProvider>
        <Person />
      </UserProvider>
    </>
  )
}
export default App

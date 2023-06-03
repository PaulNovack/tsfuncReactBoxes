import React /*, { useState }  */ from 'react'
import {
  ExampleProvider,
  Greet,
  Person,
  UserContext,
  Props,
  blankUser
} from './context/Application'

function App() {
  const UserProvider: React.FC<Props> = ({ children }) => {
      /*
      const [firstName, setFirstName] = useState(blankUser.firstName)
      const [lastName, setLastName]  = useState(blankUser.lastName)
      const [address, setAddress] = useState(blankUser.address)
      const [city, setCity]  = useState(blankUser.city)
      const [state, setState]  = useState(blankUser.state)
      const [zipCode, setZipCode]  = useState(blankUser.zipCode)
      const [phoneNumber, setPhoneNumber]  = useState(blankUser.phoneNumber)
      */

    return (
      <UserContext.Provider value={blankUser}>{children}</UserContext.Provider>
    )
  }
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

import React, { createContext, useContext } from 'react'

const exampleData = { username: 'Logan Novack' }
export const ExampleContext = createContext(exampleData)

export interface Props {
  children: React.ReactNode
}

export const ExampleProvider: React.FC<Props> = ({ children }) => {
  return (
    <ExampleContext.Provider value={{ username: 'Paul Novack' }}>
      {children}
    </ExampleContext.Provider>
  )
}

export const Greet: React.FC = () => {
  const data = useContext(ExampleContext)
  return <h1>Hello, {data.username}</h1>
}

export const Person: React.FC = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>
        Hello, {user.firstName} {user.lastName}
      </h2>
      <h2>{user.address}</h2>
      <h2>
        {user.city}, {user.state} {user.zipCode}
      </h2>
      <h2>Phone: {user.phoneNumber}</h2>
    </div>
  )
}

export interface User {
  firstName?: string
  setFirstName: (val: string) => void
  lastName?: string
  setLastName: (val: string) => void
  address?: string
  setAddress: (val: string) => void
  city?: string
  setCity: (val: string) => void
  state?: string
  setState: (val: string) => void
  zipCode?: string
  setZipCode: (val: string) => void
  phoneNumber: string
  setPhoneNumber: (val: string) => void
}
export function mustImplement(): typeof Error {
  throw new Error('Please implement this function')
}

export const blankUser: User = {
  firstName: 'Paul',
  setFirstName: mustImplement,
  lastName: 'Novack',
  setLastName: mustImplement,
  address: '3300 Towers Boulevard',
  setAddress: mustImplement,
  city: 'Seabrook',
  setCity: mustImplement,
  state: 'Texas',
  setState: mustImplement,
  zipCode: '77586',
  setZipCode: mustImplement,
  phoneNumber: '512-705-4293',
  setPhoneNumber: mustImplement
}

export const UserContext = createContext(blankUser)

export const UserProvider: React.FC<Props> = ({ children }) => {
  return (
    <UserContext.Provider value={blankUser}>{children}</UserContext.Provider>
  )
}

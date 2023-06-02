import { createContext } from 'react'

export interface AppContextInterface {
  firstName: string
  setFirstName: (name: string) => void
  lastName: string
  setLastName: (name: string) => void
  address: string
  setAddress: (address: string) => void
  city: string
  setCity: (city: string) => void
  state: string
  setState: (state: string) => void
  zipCode: string
  setZipCode: (zipCode: string) => void
  phoneNumber: string
  setPhoneNUmber: (phoneNumber: string) => void
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserInformationContext = createContext<AppContextInterface>({
  address: '',
  city: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  setAddress (address: string): void {
  },
  setCity (city: string): void {
  },
  setFirstName (name: string): void {
  },
  setLastName (name: string): void {
  },
  setPhoneNUmber (phoneNumber: string): void {
  },
  setState (state: string): void {
  },
  setZipCode (zipCode: string): void {
  },
  state: '',
  zipCode: ''
})

import React from 'react'

export interface AppContextInterface {
  name: string
}

const AppContext = React.createContext<AppContextInterface>({
  name: ''
})

export default AppContext

import { createContext } from 'react'
import {UserIfc} from './UserContext'

export const LevelContext = createContext<UserIfc>({id:1})
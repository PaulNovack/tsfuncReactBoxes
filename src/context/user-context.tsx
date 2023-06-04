import {createContext} from "vm"
import User from "../interfaces/User"
import {useState} from "react"

const initialState = {
    first_name: '',
    last_name: '',
    token: null
}

const UserContext = createContext(initialState)

const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>(initialState)

    const updateUser = (updateUser: User) => {
        setUser({ ...user, ...updateUser })
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
export interface UserData {
  first_name: string
  last_name: string
  age?: number
  isAdmin?: boolean
}

const User: UserData = {
  first_name: '',
  last_name: '',
  age: 0,
  isAdmin: false
}

export default User

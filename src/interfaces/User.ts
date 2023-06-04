export interface User {
  first_name: string
  last_name: string
  token: string | null
}

export const blankUser: User = {
  first_name: '',
  last_name: '',
  token: null,
}

export default User
